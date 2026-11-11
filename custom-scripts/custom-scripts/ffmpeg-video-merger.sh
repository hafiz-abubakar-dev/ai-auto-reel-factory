#!/bin/bash
# n8n Execute Command Node: FFmpeg Video Concatenation & Audio Muxing

# Create the list of clips to merge
printf "file '/tmp/clip_a1.mp4'\nfile '/tmp/clip_a2.mp4'\nfile '/tmp/clip_a3.mp4'\nfile '/tmp/clip_a4.mp4'\n" > /tmp/list.txt

# Merge clips using FFmpeg
ffmpeg -y -f concat -safe 0 -i /tmp/list.txt -c copy /tmp/final_video.mp4

# Check final output size
ls -lh /tmp/final_video.mp4
