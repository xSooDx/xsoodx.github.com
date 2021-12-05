---
layout: post
title: "SSFS: File System in User Space"
---

This was a project I built for my Unix System Programming on Unix's Filesystem in USEerspace (FUSE), a software interface that lets you build your own custom filesystem implementations. I used the C language to create an implementation of a 2-level filesystem that organized all its files in folders according to the file extention. My implementation also displays each file name as its full directory location.

C interface for FUSE
``` c
struct fuse_operations ss_ops = {
    .getattr = ss_getattr,
    .readdir = ss_readdir,
    .open = ss_open,
    .read = ss_read,
    .write = ss_write,
    .unlink = ss_unlink,
    .opendir = ss_opendir,
    .rmdir = ss_rmdir,
    .truncate = ss_truncate,
    .ftruncate = ss_ftruncate,
}
```

To use the filesystem, you run the executable with a mounting directory and a directory to scan. Then then you can interact with the new mounted folder just as you would with any other folder via a GUI or CLI. Functions like *ls*, *cat*, *grep*, etc. use implementations that is specified by FUSE to interact with the folder.

Command line usage
![CLI usage](/assets/media/ssfs_cli.png){: .img}
GUI usage
![CLI usage](/assets/media/op_ssfs.png){: .img-wide}

Read more on my [blog post](https://wp.me/p8g5CU-7s).

[![Github Link](/assets/media/github-badge.png)](https://github.com/xSooDx/ssfs){:class="store-badge"}