const config_qrdata_n23 = {    

      
        t00: {tag_id:'00',length:'02',value:"01"},
        t01: {tag_id:'01',length:'02',value:"12"},
        t30: {
          tag_id: '30',      
          st00: {
            sub_tag_id:'00',
            length: "16",
            value: "A000000677010112"
          },
          st01: {
            sub_tag_id:'01',
            length: "15",
            value: "099400016570603"
          }
        },
        t53:{
          tag_id:'53',
          length: "03",
          value: "764"
        },
        t58:{
          tag_id:'58',
          length: "02",
          value: "TH"
        },
        t59: {
          tag_id:'59',
          length: "06",
          value: "MRTN23"
        },
        t63:{
          tag_id:'63',
          length: "04",
          value: ""
        }

}

module.exports = config_qrdata_n23;

