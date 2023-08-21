import jwt from "jsonwebtoken";
import {Admins, Users} from "../../db/database.js";

const SecretCode = "SEcret";

async function AuthenticationAdmin(req, res, next){
    const bearer_token = req.headers.authorization;
    const token = bearer_token.split(" ")[1];
  
    const username_password = jwt.verify(token, SecretCode);
    const {username, password} = username_password;
    const found = await Admins.findOne({username: username, password: password});
  
    if(found){
      req.user = found;
      next();
    }
    else{
      res.send("invalid user/admin");
    }
}
async function AuthenticationUser(req, res, next){
    const bearer_token = req.headers.authorization;
    const token = bearer_token.split(" ")[1];
  
    const username_password = jwt.verify(token, SecretCode);
    const {username, password} = username_password;
    const found = await Users.findOne({username: username, password: password});
  
    if(found){
      req.user = found;
      next();
    }
    else{
      res.send({message: "invalid user"});
    }
}

export {AuthenticationAdmin, AuthenticationUser, SecretCode};