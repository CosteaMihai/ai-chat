import { TextHighlightProp } from "@/models/components";

export default function TextHighlight(props: TextHighlightProp) {
    let conter = 0;

    const processed = props.text.split('\n').map((item: string) => {
        if(item.includes('```')) {
            if(conter % 2 === 0) {
                conter ++;
                return item.replace('```', '<code>');
            }

            if(conter % 2 !== 0) {
                conter ++;
                return item.replace('```', '</code>');
            }
        }

        if(item === '') {
            return '<br>';
        }


        return '<div>' + item + '</div>';

    })

    return <div dangerouslySetInnerHTML={{ __html: processed.join('') }}></div>
}