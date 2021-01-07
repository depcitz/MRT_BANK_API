const config_env = {
    db_config: {

        //UAT
        HOST_DB: "27.254.122.36",
        PORT_DB:7215,
        DATABASE_DB:"cit_carparking_mrt_online_db",
        USER_DB:"postgres",
        PASSWORD_DB:"Cit@pwddb",  
        max: 20,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 2000,

        // //PRODUCTION
        // HOST_DB: "147.50.143.2",
        // PORT_DB: 7216,
        // DATABASE_DB: "cit_carparking_mrt_online_db",
        // USER_DB: "postgres",
        // PASSWORD_DB: "c8p8M0c6p8L9y6@pwddb",
        // max: 20,
        // idleTimeoutMillis: 0,
        // connectionTimeoutMillis: 2000,
    },

    main_config: {
        PORT: 6418,

        // UAT
        AUTH_USER:"uatktb",
        AUTH_PASS:"uatpark@ride"

        // // PRODUCTION
        //  AUTH_USER: "realktb",
        //  AUTH_PASS: "realpark@ride"



    },
    config_error: {
        INVALID_PRICE_OR_AMOUNT: 5000,
        OPEN_BUSINESS_HOUR_NUMBER: "09:25:00",
        CLOSE_BUSINESS_HOUR_NUMBER: "22:00:00"
    },
    config_bank: {

        COMCODE_N23: 911208,
        PRODUCTCODE_N23: 911208,
        COMCODE_N24: 911209,
        PRODUCTCODE_N24: 911209

    }





}

module.exports = config_env;

