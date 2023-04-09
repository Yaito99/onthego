import mysql from 'mysql2'





  export default async function handler(req, res) {
    const { email, password } = req.body;
    const con = mysql.createConnection(process.env.DATABASE_URL)
    const sql1 = `SELECT * FROM users WHERE email = '${email}'`
    con.query(sql1,(err,result)=>{
      if(err){
        console.log(err)
        res.status(400).json({ message: err });
        return
      }
      if(!result.length){
        const sql = `INSERT INTO users (email ,password ) VALUES ('${email}', '${password}')`

        con.query(sql,(err,result)=>{
          if(err){
            console.log(err)
            res.status(400).json({ message: err });
            return
          }
          if(result.insertId > 1){
            res.status(200).json("Done")
          } else{
            res.status(400).json({ message: 'Something went wrong' });
          }
        }
        );

      } else{
        res.status(401).json({ message: 'Email is already used' });
      }

    }
    );

   
    }