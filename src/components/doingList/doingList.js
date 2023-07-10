import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const DoingList = () => {

    async function fetchPosts() {
        const {data} = await axios.get('https://fakestoreapi.com/products')

        return data;

    }


    const {data, error, isLoading, isError} = useQuery(['posts'], fetchPosts);


    if (isLoading) {
        return <div>.... loading</div>
    }


    if (isError) {
        return 'An error has occurred: ' + error.message
    }
    return (
        <div
            className={"col-span-3 gap-3 flex flex-col p-2 h-[85vh] backdrop-blur-sm shadow-md rounded-2xl bg-white/30 "}>
            <h1 className={"font-black text-xl text-gray-600 mb-5"}>
                In Progress
            </h1>
            <div className={"flex flex-col gap-8 overflow-y-scroll    max-w-3xl"}>
                {
                    console.log(data)
                }
                {
                    data.map(item => (
                        <div className={"flex flex-col gap-3 backdrop-blur-sm shadow-md rounded-2xl bg-white/30 p-3 m-2"} key={item.id} >
                            <div className={"bg-red-100 max-w-max py-1 px-3 rounded-2xl"}>
                                {item.category}
                            </div>
                            <img src={`${item.image}`} alt={item.category} className={'w-[50%]'}/>
                            <div>
                                {item.title}
                            </div>
                            <div className={"flex flex-row gap-3"}>
                                <div>rate:{item.rating.rate}</div> <div>{item.price}$</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}


export default DoingList