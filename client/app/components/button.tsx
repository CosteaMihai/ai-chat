import Image from 'next/image';

export default function Button({ ...props }) {
    return (
        <button
            className='bg-blue-500 p-2 rounded-xl transition ease-in-out duration-200 hover:bg-blue-600'
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.name ? props.name : props.icon ? 
                <Image 
                    className='w-5 h-5'
                    src={props.icon} 
                    height={30} 
                    width={30} 
                    alt='button-image'/> 
            : 'Default'}
        </button>
    );
}