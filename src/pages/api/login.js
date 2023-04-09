import mysql from 'mysql2'





  export default async function handler(req, res) {
    const { email, password } = req.body;
    const con = mysql.createConnection(process.env.DATABASE_URL)
    const sql = `SELECT * FROM users WHERE email = '${email}' and password =${password}`
    con.query(sql,(err,result)=>{
      if(err){
        console.log(err)
        res.status(400).json({ message: err });
        return
      }
      if(result.length){
        res.status(200).json({ message: "Login is fine" });  
      } else{
        res.status(404).json({ message: 'Wrong email or password' });
      }

    }
    );

   
    }