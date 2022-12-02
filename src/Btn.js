import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Btn(bgColor, btnLabel, textcolor) {
    return (
        <TouchableOpacity style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center',width:200 }}>
            <Text style={{ color: textcolor, fontSize: 22, fontWeight: 'bold' }}>{btnLabel}</Text>

        </TouchableOpacity>
    );  
}

