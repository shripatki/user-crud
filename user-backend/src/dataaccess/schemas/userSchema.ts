import {Schema} from "mongoose";
import DataAccess = require("../dataAccess");
import User = require("../mongoose/User");

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {

        const user = new Schema({
                email: {
                    type: String,
                   
                    unique: true
                },
                mobileNumber: {
                    type: Number,
                    
                  },
                firstName: {
                    type: String,
                    
                },
                lastName: {
                    type: String,
                    
                }
            },
            {
                timestamps: true,
                versionKey: false
            });
        return user;
    }
}
const userSchema = mongooseConnection.model<User>("User", UserSchema.schema);
export = userSchema;
