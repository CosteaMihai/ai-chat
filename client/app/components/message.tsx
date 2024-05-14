import Image from 'next/image';
import brainSvg from "@/public/world.svg";
import userSvg from "@/public/user.svg";
import Error from '@/app/components/error';
import Loading from '@/app/components/loading';
import TextHighlight from './text-highlight';
import { MessageProp } from '@/models/components';

export default function Message(props: MessageProp) {
    return (
        <div className='flex flex-col w-full mb-5'>
            <div className='flex items-center'>
                <div className='w-10 h-10 flex justify-center items-center rounded-full bg-blue-500'>
                    <Image
                        className={props.item.role === 'assistant' ? 'w-6 h-6' : 'w-5 h-5'}
                        src={props.item.role === 'assistant' ? brainSvg : userSvg}
                        height={30}
                        width={30}
                        alt='button-image' />
                </div>

                <div className='font-semibold ml-5'>
                    {props.item.role === 'assistant' ? 'Open AI' : 'You'}
                </div>
            </div>
            <div className='ml-[60px]'>
                {
                    !props.item.isLoading && !props.item.isError ? <div className='bg-blue-50 rounded-xl p-5'><TextHighlight text={props.item.content}></TextHighlight></div> : 
                    props.item.isError ? <Error></Error> : <Loading></Loading>
                }
            </div>
        </div>
    );
}