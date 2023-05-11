import {FC, useState} from 'react';
import TopBar from './TopBar/TopBar'
import Table from './Table/Table'
import {useTemplate} from "@/providers/TemplateProvider";
import Modal from '@/components/UI/ModalTemplateCreate'

const Template: FC = () => {
    const [selectedTemplates, setSelectedTemplates] = useState<string[]>([])
    const {modalType} = useTemplate()
    const [editItem, setEditItem] = useState<string>('')
    const [allChecked, setAllChecked] = useState<boolean>(false)

    return (
        <div>
            <TopBar selectedTemplates={selectedTemplates} setAllChecked={setAllChecked}
                    setSelectedTemplates={setSelectedTemplates}/>
            <Table setSelectedTemplates={setSelectedTemplates} allChecked={allChecked} setAllChecked={setAllChecked}
                   setEditItem={setEditItem} editItem={editItem}/>
            {(modalType === 'edit' || modalType === 'create') && <Modal setEditItem={setEditItem}/>}
        </div>
    );
}

export default Template;