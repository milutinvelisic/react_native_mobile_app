import {StyleSheet, Text, View, Modal as RNModal, ModalProps, KeyboardAvoidingView, Platform} from 'react-native'
import React from 'react'

type PROPS = ModalProps & {
    isOpen: boolean
    withInput?: boolean
}

const Modal = ({isOpen, withInput, children, ...rest}: PROPS) => {
    const content = withInput ? (
        <KeyboardAvoidingView
            className="my-auto items-center justify-center flex-1 px-3 bg-accent"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {children}
        </KeyboardAvoidingView>
    ) :
        <View
            className="items-center justify-center flex-1 px-3 bg-accent"
        >
            {children}
        </View>

    return (
        <RNModal
            visible={isOpen}
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            {content}
        </RNModal>
    )
}
export default Modal
const styles = StyleSheet.create({})
