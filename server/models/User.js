const { Schema, model } = require("mongoose");
const projectSchema = require("./Project");
const userSchema = new Schema(
     {
          oauthId: {
               type: String,
               required: true,
               max_length: 50,
          },
          name: {
               type: String,
               required: true,
               max_length: 50,
          },
          bio: {
               type: String,
               max_length: 250,
          },
          image: {
               type: String,
               max_length: 250,
               nullable: true,
          },
          skills: {
               type: [String],
          },
          email: {
               type: String,
               max_length: 150,
               nullable: true,
          },
          website: {
               type: String,
               max_length: 150,
               nullable: true,
          },
          usersFollowed: {
               type: Schema.Types.ObjectId,
               ref: "User",
          },
          tagsFollowed: {
               type: [String],
          },
          Projects: [
               {
                    type: Schema.Types.ObjectId,
                    ref: 'Project'
               }
          ],
     },
     {
          toJSON: {
               getters: true,
          },
     }
);
const User = model("User", userSchema);
module.exports = User;