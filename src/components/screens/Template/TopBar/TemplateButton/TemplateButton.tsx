import {FC} from 'react';
import PlusImg from "@/components/icons/Plus.svg";
import {useTemplate} from "@/providers/TemplateProvider";

const TemplateButton: FC = () => {
    const {setModalType} = useTemplate()
    return (
        <div onClick={() => setModalType('create')} className={'py-2 pl-4 pr-3 bg-blue-bg flex cursor-pointer items-center gap-2'}>
            <PlusImg className={'fill-white'}/>
            <h4 className={'text-white'}>Create new template</h4>
        </div>
    );
}

export default TemplateButton;