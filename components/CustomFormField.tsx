'use client'

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Control, FieldValues } from "react-hook-form"
import { FormFieldTypes } from "./forms/PatientForm"
import Image from "next/image"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from "libphonenumber-js/core"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger } from "./ui/select"
import { SelectValue } from "@radix-ui/react-select"
import { Textarea } from "./ui/textarea"


interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldTypes,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelector?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({field, props}: {field: FieldValues, props: CustomProps}) => {
    const {fieldType, iconSrc, iconAlt, placeholder, showTimeSelector, dateFormat, renderSkeleton} = props;
    switch (fieldType) {
        case FormFieldTypes.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            alt={iconAlt || 'icon'}
                            width={24}
                            height={24}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            {...field}
                            placeholder={placeholder}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
        case FormFieldTypes.TEXTAREA: 
            return (
                <FormControl>
                    <Textarea
                        placeholder={placeholder}
                        {...field}
                        className="shad-textArea"
                        disabled={props.disabled}
                    />
                </FormControl>
            )
        case FormFieldTypes.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry="ES"
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="shad-input border-0"
                    />
                </FormControl>
            )
        case FormFieldTypes.DATE_PICKER:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    <Image
                        src="/assets/icons/calendar.svg"
                        height={24}
                        width={24}
                        alt="calendar"
                        className='ml-2'
                    />
                    <FormControl>
                        <DatePicker
                            selected={field.value} 
                            onChange={(date) => field.onChange(date)}
                            dateFormat={dateFormat ?? 'dd/MM/yyyy'}
                            showTimeSelect={showTimeSelector ?? false}
                            timeInputLabel="Time:"
                            wrapperClassName="date-picker"
                        />
                    </FormControl>
                </div>
            )
        case FormFieldTypes.SELECT: 
            return (
                <FormControl>
                    <Select 
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="shad-select-trigger">
                                    <SelectValue
                                        placeholder={placeholder}
                                    />
                                </SelectTrigger>
                            </FormControl>  
                            <SelectContent className="shad-select-content">
                                {props.children}
                            </SelectContent>
                    </Select>
                </FormControl>
            )
        case FormFieldTypes.SKELETON:
            return renderSkeleton ? renderSkeleton
            (field) : null
        default:
            break;
    }
}

const CustomFormField = (props: CustomProps) => {
    const {control, fieldType, name, label} = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
            <FormItem className="flex-1">
                {fieldType !== FormFieldTypes.CHECKBOX && label && (
                    <FormLabel>{label}</FormLabel>
                )}
                <RenderField
                    field={field}
                    props={props}
                />
                <FormMessage className="text-error" />
            </FormItem>
            )}
        />
    )
}

export default CustomFormField
