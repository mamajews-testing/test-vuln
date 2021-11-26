module.exports.index = async function (req, res) {
  const value = req.query.value;

  res.setHeader("Set-Cookie", value);  // Noncompliant
  res.cookie("connect.sid", value);  // Noncompliant
};


crypto.createCipheriv("AES-128-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 (set by default) is vulnerable to oracle padding attacks
crypto.createCipheriv("AES-128-ECB", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality
