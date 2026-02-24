import { useState } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native'

interface skillsLabels extends TouchableWithoutFeedbackProps{
    name:string
    
}

export default function Skills({name,valor,  ... rest}:skillsLabels) {
    
  return (
    
        <TouchableOpacity {... rest}>
            {ligado ? (<Text>CLicque Aqui para ligar</Text>):
            (<Text>CLique Aqui para desligar</Text>)}
            
        </TouchableOpacity>
       
  )
}