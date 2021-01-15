Document's path: should store as an absolute path or just store a parent folder Id?

If we store the absolute path, the problem:
- One of the parent folder rename in another Browser tab/windows, how can we handle it? Basically, document is coupled to the folder path.

If we store the parent folder Id, the problem?
- Loading performance?

However, when recover a deleted Document, if it just stores the parentFolderId, and that parent folder is deleted, then we cannot recover it.
Therefore, we have to store the absolute parent folder path of deleted Document.