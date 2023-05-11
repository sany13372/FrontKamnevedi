import {createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react'
import {ITemplate} from "@/types/all.interface";

export interface ITemplateContext {
    templates: ITemplate[];
    setTemplates: (templates: ITemplate[]) => void
    dataTemplates: ITemplate[];
    setDataTemplates: (templates: ITemplate[]) => void
    templatesPaginate: ITemplate[];
    setTemplatesPaginate: (templates: ITemplate[]) => void
    selectTemplate: ITemplate
    setSelectTemplate: (selectTemplate: ITemplate) => void
    modalType: string
    setModalType: (modalType: string) => void
}

export const templatesDefault: ITemplate[] = [
    {
        id: '1',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '2',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '3',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
    {
        id: '4',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '5',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '6',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
    {
        id: '7',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '8',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '9',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
    {
        id: '10',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '11',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '12',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
    {
        id: '13',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '14',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '15',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
    {
        id: '16',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '17',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '18',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
    {
        id: '19',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '20',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '21',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
    {
        id: '22',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'Email'
    },
    {
        id: '23',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'SMS'
    },
    {
        id: '24',
        name: 'Contract developers',
        text: 'Hi {{first_name}}, you’re invited to interview for {{job_name}}, {{seniority}} at {{company}}. The job closes on {{closes_date}}. Best, Maurice.',
        type: 'WhatsApp'
    },
]

export const TemplateContext = createContext<ITemplateContext>({} as ITemplateContext)

const TemplateProvider: FC<PropsWithChildren> = ({children}) => {

    const [dataTemplates, setDataTemplates] = useState<ITemplate[]>([])
    const [templates, setTemplates] = useState<ITemplate[]>([])
    const [templatesPaginate, setTemplatesPaginate] = useState<ITemplate[]>([])
    const [selectTemplate, setSelectTemplate] = useState<ITemplate>({} as ITemplate)
    const [modalType, setModalType] = useState<string>('')

    useEffect(() => {
        setDataTemplates(templatesDefault)
    }, [])

    const values = useMemo(() => ({
        templates,
        setTemplates,
        selectTemplate,
        setSelectTemplate,
        modalType,
        setModalType,
        templatesPaginate,
        setTemplatesPaginate,
        dataTemplates,
        setDataTemplates
    }), [templates, selectTemplate, templatesPaginate, modalType, dataTemplates])

    return <TemplateContext.Provider value={values}>{children}</TemplateContext.Provider>
}

export default TemplateProvider
export const useTemplate = () => useContext(TemplateContext)