export const showPath = (basePath, record) => {
    return normalizePath(`${basePath}/${record.pk}/show`);
}

export const createPath = basePath => normalizePath(`${basePath}/new`);

export const editPath = (basePath, record) => {
    return normalizePath(`${basePath}/${record.pk}`);
}

export const normalizePath = path => path.split('/').filter(p => p).join('/').trim();
