import Image from 'next/image';

export default function ProgramCard({title, text, image_path, color, group}){
    return(
        <div className={`flex flex-col justify-evenly items-center border border-t-4 px-4 py-4 pb-10 mx-3 my-3 border-${color}`}>
            <h2 className="text-2xl mb-4">{title}</h2>
            <p className="text-sm mb-10 text-gray-500">{text}</p>
            <Image src={image_path} width={200} height={200} alt="green_shift_logo" />
            <div className='flex flex-wrap text-white font-bold pt-5 gap-3'>
                {
                    group.map(function(person, index){
                        return (
                            <span className={`py-1 px-2 rounded-full border bg-${color}`} key={index}>{person}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}