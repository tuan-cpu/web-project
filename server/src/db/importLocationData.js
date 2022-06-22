const Province = require('./models/province')
const District = require('./models/district')
const Ward = require('./models/ward')

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./dvhcvn.json');
let locationData = JSON.parse(rawdata).data;

async function saveProvince() {
    
    for await (const item of locationData) {
        const province = new Province({
            provinceId: item.level1_id,
            name: item.name,
            type: item.type
        })

        try {
            await province.save()
        
        } catch (error) {
            console.log(error)
        }
    }
}

async function saveDistrict() {
    
    for await (const province of locationData) {
        for await (const district of province.level2s) {
            const provinceId = await Province.findOne({provinceId: province.level1_id})
            const districtObj = new District({
                districtId: district.level2_id,
                name: district.name,
                type: district.type,
                province: provinceId._id
            })
    
            try {
                await districtObj.save()
            
            } catch (error) {
                console.log(error)
            }
        }
    }
}

async function saveWard() {

    for await (const province of locationData) {
        for await (const district of province.level2s) {
            for await (const ward of district.level3s) {
            const provinceId = await Province.findOne({provinceId: province.level1_id})
            const districtId = await District.findOne({districtId: district.level2_id})
            const wardObj = new Ward({
                wardId: ward.level3_id,
                name: ward.name,
                type: ward.type,
                district: districtId._id,
                province: provinceId._id
            })
    
            try {
                await wardObj.save()
            
            } catch (error) {
                console.log(error)
            }
        }
    }
}
}

module.exports = {
    saveProvince: saveProvince,
    saveDistrict: saveDistrict,
    saveWard: saveWard
}