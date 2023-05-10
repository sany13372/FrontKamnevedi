import {FC, useState} from 'react';
import TopBar from './TopBar/TopBar'
import Table from './Table/Table'
import {ITemplate} from "@/types/all.interface";
import {useTemplate} from "@/providers/TemplateProvider";
import Modal from '@/components/UI/ModalTemplateCreate'

const Template: FC = () => {
    const [selectedTemplates, setSelectedTemplates] = useState<ITemplate[]>([])
    const {modalType, setModalType} = useTemplate()
    return (
        <div>
            <TopBar/>
            <Table setSelectedTemplates={setSelectedTemplates}/>
            { (modalType === 'edit' ||  modalType === 'create') && <Modal/>}
            {/*<MD open={modalType === 'create'}/>*/}
        </div>
    );
}

export default Template;