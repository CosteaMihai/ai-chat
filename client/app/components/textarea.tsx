export default function Textarea({...props}) {
    return (
        <textarea
            className='resize-none w-full border-2 border-slate-300 rounded-xl py-4 px-6 overflow-hidden'
            onKeyDown={props.onKeyDown}
            rows={1}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
        >
        </textarea>
    );
}