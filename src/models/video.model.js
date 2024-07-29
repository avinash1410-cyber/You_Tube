import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  videoFile: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });



videoSchema.plugin(mongooseAggregatePaginate)

const Video = mongoose.model('Video', videoSchema);

export default Video;