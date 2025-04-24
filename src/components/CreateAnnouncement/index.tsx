import React, {useState} from 'react';
import { Radio, RadioGroup, Field } from '@headlessui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import {Audience, audience, deliveryTimes, responseSettingOptions} from "../../constants.ts";



const editorConfig = {
    licenseKey: "GPL",
    plugins: [ Essentials, Paragraph, Bold, Italic ],
    toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|'],
}

const initialFormData = {
    title: "",
    customType: "",
    body: "",
    deliveryAt: "",
    targetAudience: "dept",
    referenceId: "",
    responseSetting: "0",
    createdBy: ""
}
const CreateAnnouncement = () => {
    const [selected, setSelected] = useState(deliveryTimes[0])
    const [formData, setFormData] = useState(initialFormData)
    const selectedAudienceOptions = audience.find((item) => item.value === formData.targetAudience)?.options


    const handleInputChange = (event) => {
        const {value, name} = event.target
        setFormData((preData) => ({...preData, [name] :value}))
    }

    const handleDeliveryOptionChange = (value) => {
        if(value==='now'){
            setFormData((preData) => ({...preData, deliveryAt :""}))
        }
        setSelected(value)
    }

    const handleAudienceAndResponseSettingChange = (value, name) => {
        if(name === 'targetAudience') {
            setFormData((preData) => ({...preData, referenceId :""}))
        }
        setFormData((preData) => ({...preData, [name] :value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {...formData, responseSetting: parseInt(formData.responseSetting)}
        console.log(data)
    }

    return (
        <div className="bg-white w-full h-full rounded-[0.625rem] p-5 overflow-auto">
            <form action="" className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-4">
                    <label htmlFor="title" className="col-span-1 text-black text-lg">Title</label>
                    <input type="text" id="title" name="title" className="input" value={formData.title} onChange={handleInputChange}/>
                </div>
                <div className="grid grid-cols-4">
                    <label htmlFor="customType" className="col-span-1 text-black text-lg">Custom Type</label>
                    <input type="text" id="customType" name="customType" className="input" value={formData.customType} onChange={handleInputChange}/>
                </div>
                <div className="grid grid-cols-4">
                    <label htmlFor="body" className="col-span-1 text-black text-lg">Body</label>
                    {/*<input type="text" id="body" name="body" className="input col-span-2"/>*/}
                    <div className="col-span-2">
                        <CKEditor
                            editor={ ClassicEditor }
                            config={editorConfig}
                            data={formData.body}
                            onChange={(_, editor) => {
                                const data = editor.getData()
                                setFormData((preData) => ({...preData, body: data}))
                            }}
                        />
                    </div>

                </div>
                <div className="grid grid-cols-4">
                    <label htmlFor="body" className="col-span-1 text-black text-lg">Delivery Time</label>
                    <div className="flex items-start gap-4">
                        <RadioGroup value={selected} onChange={handleDeliveryOptionChange} className="flex items-center gap-6">
                            {deliveryTimes.map((plan) => (
                                <Field key={plan} className="flex items-center gap-2">
                                    <Radio
                                        value={plan}
                                        className="group flex size-5 items-center justify-center rounded-full border border-dark-gray bg-white data-[checked]:border-blue data-[disabled]:bg-gray-100"
                                    >
                                        <span className="invisible size-2 rounded-full bg-blue group-data-[checked]:visible" />
                                    </Radio>
                                    <label className="capitalize text-dark-gray">{plan}</label>
                                </Field>
                            ))}
                        </RadioGroup>
                        {
                            selected === 'schedule' &&
                            <input type="datetime-local" className="input" name="deliveryAt" value={formData.deliveryAt} onChange={handleInputChange}/>
                        }

                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <label htmlFor="body" className="col-span-1 text-black text-lg">Target Audience</label>
                    <div>
                        <RadioGroup
                            className="flex items-center gap-6"
                            value={formData.targetAudience}
                            name="targetAudience"
                            onChange={(value) => handleAudienceAndResponseSettingChange(value,'targetAudience')}
                        >
                            {audience.map((plan) => (
                                <Field key={plan.value} className="flex items-center gap-2">
                                    <Radio
                                        value={plan.value}
                                        className="group flex size-5 items-center justify-center rounded-full border border-dark-gray bg-white data-[checked]:border-blue data-[disabled]:bg-gray-100"
                                    >
                                        <span className="invisible size-2 rounded-full bg-blue group-data-[checked]:visible" />
                                    </Radio>
                                    <label className="capitalize text-dark-gray">{plan.label}</label>
                                </Field>
                            ))}
                        </RadioGroup>
                        {
                            formData.targetAudience !== Audience.ALL &&
                            <div className="flex gap-4 text-dark-gray mt-4">
                                <p className="font-semibold">Options:</p>
                                <select
                                    value={formData.referenceId}
                                    name="referenceId"
                                    onChange={handleInputChange}
                                    className="input"
                                >
                                    <option value="">Select option</option>
                                    {
                                        (selectedAudienceOptions || []).map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        }

                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <label htmlFor="body" className="col-span-1 text-black text-lg">Response Unit Setting</label>

                    <RadioGroup
                        className="flex items-center gap-6 col-span-2"
                        name="responseSetting"
                        value={formData.responseSetting}
                        onChange={(value) => handleAudienceAndResponseSettingChange(value,'responseSetting')}
                    >
                        {responseSettingOptions.map((plan) => (
                            <Field key={plan.value} className="flex items-center gap-2">
                                <Radio
                                    value={plan.value}
                                    className="group flex size-5 items-center justify-center rounded-full border border-dark-gray bg-white data-[checked]:border-blue data-[disabled]:bg-gray-100"
                                >
                                    <span className="invisible size-2 rounded-full bg-blue group-data-[checked]:visible" />
                                </Radio>
                                <label className="capitalize text-dark-gray">{plan.label}</label>
                            </Field>
                        ))}
                    </RadioGroup>


                </div>
                <div className="mt-5 self-center">
                    <button type="submit" className="w-fit bg-blue rounded-md px-2.5 py-2 text-white ">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default CreateAnnouncement;