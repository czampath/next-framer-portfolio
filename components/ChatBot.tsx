
import React, { useState } from 'react';
import axios from 'axios';
import { DevData, useDevDetails } from '@/context/DevDetailsContext';

const Chatbot: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);

    const devData = useDevDetails();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessages((prev) => [...prev, { user: input, bot: '' }]);
        setInput('');

        const recruiterRequest: DevData | null = devData;

        let stage_1_msg: any = {};
        stage_1_msg["system"] = recruiterRequest?.["stage-1"]["instruction"] + "\njson_tree:\n" + recruiterRequest?.["stage-1"]["json_tree"];
        stage_1_msg["user"] = input
        let stage1BotResponse: any;
        try {
            const st1Response = await axios.post('/api/chat', { message: stage_1_msg });
            stage1BotResponse = st1Response.data.message;
        } catch (error) {
            console.error(error);
        }

        try{
            let parsedJson = JSON.parse(stage1BotResponse.replaceAll("\\_", "_").replaceAll("```", "") );
            let stage_2_msg : any = {};

            stage_2_msg["system"] = recruiterRequest?.["stage-2"]["instruction"] + "\n" + recruiterRequest?.["stage-2"].note + "\n\npersonal_details:\n";
            stage_2_msg["user"] = input

            let detailsJson: any = {}
            
            if (parsedJson && typeof parsedJson === 'object' && !Array.isArray(parsedJson)) {
                // it's a json node
                Object.keys(parsedJson).forEach((key) => {

                    let data : any = recruiterRequest?.["stage-2"].details[key];
                    if(key === "experience_verbose"){
                        detailsJson[key] = data.filter( (item:any) => item.technologies.map((tech:any)  => tech.toLowerCase().includes(parsedJson[key][0].technologies[0])).includes(true) )
                    }else{
                        detailsJson[key] = data
                    }
                })
                console.log('parsedJson is a json node');
            } else if (parsedJson && Array.isArray(parsedJson)) {
                // it's a json array
                debugger;
                parsedJson.forEach((element) => {
                    debugger;
                    let data : any = recruiterRequest?.["stage-2"].details[element];
                    if(element === "experience_verbose"){
                        detailsJson[element] = data.filter( (item:any) => item.technologies.map((tech:any)  => tech.toLowerCase().includes(parsedJson[element][0].technologies[0])).includes(true) )
                    }else{
                        detailsJson[element] = data
                    }
                })
                console.log('parsedJson is a json array');
            }
            stage_2_msg["system"] += JSON.stringify(detailsJson);
            const st2Response = await axios.post('/api/chat', { message: stage_2_msg, tokens: 300 });
            const stage2BotResponse = st2Response.data.message;

            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1].bot = stage2BotResponse;
                return updated;
            });
        }catch(err){
            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1].bot = "Oops! There was an error, Please try again";
                return updated;
            });
        }
    };

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="hover:ring-2 duration-300 p-4 border rounded-lg z-30 bg-slate-800 w-full md:w-[80%] text-left  shadow-[0_0_10px_2px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col-reverse space-y-4 text-wrap overflow-y-auto m-3  h-full max-h-[30vh] md:max-h-[23vh]">
                    {messages.slice().reverse().map((msg, index) => (
                        <div key={index}>
                            <p className="font-bold text-amber-300">You:</p>
                            <p className="font-bold text-amber-300 mb-3"> {msg.user}</p>
                            <p className="font-bold text-green-300">Me:</p>
                            <p className="font-medium text-white-100 mb-3">{msg.bot}</p>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="mt-4 flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className=" duration-200 active:bg-slate-700 border rounded-lg flex-1 py-2 px-4"
                        placeholder="Ask me anything..."
                    />
                    <button type="submit" className="ml-2 py-2 px-5 bg-blue-500 text-white rounded-lg" disabled={!input} >
                        Ask
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;
