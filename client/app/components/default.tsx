import Image from 'next/image';
import brainSvg from "@/public/world.svg";

export default function Default() {
    return (
        <div className='flex flex-col items-center mt-10'>
            <div className='w-16 h-16 flex justify-center items-center rounded-full bg-blue-500 mb-10'>
                <Image 
                    className='w-10 h-10'
                    src={brainSvg}
                    height={30} 
                    width={30} 
                    alt='button-image'/>
            </div>
            <div className='text-3xl font-semibold mb-4 text-center'>Hello to our new Open AI</div>
            <div className='text-center'>Ask a qeustion and we will do our best</div>
        </div>
    );
}