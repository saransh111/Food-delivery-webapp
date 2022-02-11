import Note from "../models/noteModel.js";
import asyncHandler from "express-async-handler";


const getNotes = asyncHandler(async (req, res) => {
    const {user} =  req.body;
    const notes = await Note.find({user: user});
    res.status(201).json(notes);
});

const CreateNote = asyncHandler(async (req, res) => {
  const { title ,user } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const note = new Note({ title,user });
    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});

const DeleteNote = asyncHandler(async (req, res) => {
    Note.findByIdAndRemove(req.params.id, (err, doc) => {
    if(!err) {
        res.status(400);
        throw new Error("note not removed");
        return ;
    }
    else{
      res.status(201).json("note deleted");
    }
});
});



export {  getNotes, CreateNote, DeleteNote };