

const Profile = async (req, res) => {
  try {
    res.status(200).json({message: "Organizer Profile"});
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = {Profile};