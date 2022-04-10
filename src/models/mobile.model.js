const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
      product_name: { type: String, required: true },
      product_id:{type: String, required: true},
      rating: { type: Number, required: true },
      reviews: { type: String},
      price: [{ type: Number}],
      discount: { type: Number, required: true },
      exchange: { type: Number},
      cardImage: [{type: String}],
      detailImage: [{type: String}],
      boxImage:{type:String},
      actualImage:{type:String},
      colorImage1: [{type: String}],
      colorImage2: [{type: String}],
      color: [{type: String}],
      video:[{type: String}],
      new:{type: String, required: true},
      description:{
        CPUSpeed:{type:String,required:true},
        CPUType:{type:String,required:true},
        SizeMainDisplay:{type:String,required:true},
        ResolutionMainDisplay:{type:String,required:true},
        RAMSizeGB:{type:Number,required:true},
        ROMSizeGB:{type:Number,required:true},
        Dimension:{type:String,required:true},
        Weight:{type:Number,required:true},
        BatteryCapacity:{type:Number,required:true},
        RearCameraResolution:{type:String,required:true},
        Infra:{type:String,required:true},
        RearCameraFNumber:{type:String,required:true},
        FrontCameraResolution:{type:String,required:true},
        FrontCameraFNumber:{type:String,required:true},
        ScreenSize:{type:String,required:true},
        DimensionDetail:[{type:String}],
        Processor:{type:String,required:true},
        MaxDisplayRefreshRate:{type:String,required:true},
        Camera:[{type:String}],
        Storage:[{type:String}],
        SPenCompatibility:{type:String,required:true}
      }
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Mobile = mongoose.model("mobile", mobileSchema)

  module.exports = Mobile;