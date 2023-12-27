const db = require("../db");

exports.registerCompany = async (req, res) => {
  try {
    const {
      company_name,
      address,
      city,
      state,
      pincode,
      contact_person_name,
      mobile,
      contact_no,
      email_id,
      website,
      username,
      password,
    } = req.body;
    const newCompany = await db.query(
      "INSERT INTO company_registration (company_name, address, city, state, pincode, contact_person_name, mobile, contact_no, email_id, website, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        company_name,
        address,
        city,
        state,
        pincode,
        contact_person_name,
        mobile,
        contact_no,
        email_id,
        website,
        username,
        password,
      ]
    );
    console.log(res.json, "results");
    res.json(newCompany.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getRecentCompanies = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM company_registration ORDER BY id DESC LIMIT 5"
    );

    res.json({ companies: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving recent companies" });
  }
};
