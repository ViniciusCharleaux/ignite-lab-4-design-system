import {TextInput, TextInputRootProps} from './TextInput'
import {Meta, StoryObj} from '@storybook/react'
import {Envelope} from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icons>
                <Envelope/>
            </TextInput.Icons>,
            <TextInput.Input placeholder='Type ypur e-mail address'/>
        ]
    },
    argTypes:{
        children: {
            table:{
                disable: true
            }
        }
    }
}as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder='Type ypur e-mail address'/>
    }
}
