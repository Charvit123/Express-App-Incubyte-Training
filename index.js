import { faker } from '@faker-js/faker/locale/es_MX';
import express, { query } from 'express'
import _ from 'lodash'

const app=express();

app.listen(3000,()=>{
    console.log("app is started on 3000");
});

app.get("/address",(req,res)=>{
    res.send(
        _.times(10,()=>{
            return {
                "houseNo":faker.address.buildingNumber(),
                "street":faker.address.street(),
                "city":faker.address.city(),
                "pincode":faker.address.zipCode(),
                "country":faker.address.country(),
        }})
    );
})

app.get("/pokemon",(req,res)=>{
    const param = req.query.count ?? 10;
    console.log(param)
    res.send(
        _.times(param,()=>{
            return {
                "id":faker.datatype.uuid(),
                "name":faker.animal.type(),
                "power":faker.science.chemicalElement().name,
                "imgUrl":faker.image.animals(),
                "weight":faker.datatype.number(),
                "height":faker.datatype.number(),
        }})
    );
})