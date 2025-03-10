import Api from '@/common/Api';

export const machineApi = {
    // 获取权限列表
    list: Api.newGet("/machines"),
    getMachinePwd: Api.newGet("/machines/{id}/pwd"),
    info: Api.newGet("/machines/{id}/sysinfo"),
    stats: Api.newGet("/machines/{id}/stats"),
    process: Api.newGet("/machines/{id}/process"),
    // 终止进程
    killProcess: Api.newDelete("/machines/{id}/process"),
    closeCli: Api.newDelete("/machines/{id}/close-cli"),
    testConn: Api.newPost("/machines/test-conn"),
    // 保存按钮
    saveMachine: Api.newPost("/machines"),
    // 调整状态
    changeStatus: Api.newPut("/machines/{id}/{status}"),
    // 删除机器
    del: Api.newDelete("/machines/{id}"),
    scripts: Api.newGet("/machines/{machineId}/scripts"),
    runScript: Api.newGet("/machines/{machineId}/scripts/{scriptId}/run"),
    saveScript: Api.newPost("/machines/{machineId}/scripts"),
    deleteScript: Api.newDelete("/machines/{machineId}/scripts/{scriptId}"),
    // 获取配置文件列表
    files: Api.newGet("/machines/{id}/files"),
    lsFile: Api.newGet("/machines/{machineId}/files/{fileId}/read-dir"),
    rmFile: Api.newDelete("/machines/{machineId}/files/{fileId}/remove"),
    uploadFile: Api.newPost("/machines/{machineId}/files/{fileId}/upload?token={token}"),
    fileContent: Api.newGet("/machines/{machineId}/files/{fileId}/read"),
    createFile: Api.newPost("/machines/{machineId}/files/{id}/create-file"),
    // 修改文件内容
    updateFileContent: Api.newPost("/machines/{machineId}/files/{id}/write"),
    // 添加文件or目录
    addConf: Api.newPost("/machines/{machineId}/files"),
    // 删除配置的文件or目录
    delConf: Api.newDelete("/machines/{machineId}/files/{id}"),
    terminal: Api.newGet("/api/machines/{id}/terminal"),
    recDirNames: Api.newGet("/machines/rec/names")
}

export const authCertApi = {
    baseList : Api.newGet("/sys/authcerts/base"),
    list: Api.newGet("/sys/authcerts"),
    save: Api.newPost("/sys/authcerts"),
    delete: Api.newDelete("/sys/authcerts/{id}"),
}