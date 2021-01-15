const SPLITTERS: string[] = ['/', '\\'];

const isStartWith = (str: string, prefixes: string[]): string | undefined => {
    for (const prefix of prefixes) {
        if (str.startsWith(prefix)) {
            return prefix;
        }
    }
};

const isEndWith = (str: string, prefixes: string[]): string | undefined => {
    for (const prefix of prefixes) {
        if (str.endsWith(prefix)) {
            return prefix;
        }
    }
};

const normalizePath = (absolutePath: string): string => {
    let normAbsolutePath: string = absolutePath;
    const prefixSplitter: string | undefined = isStartWith(absolutePath, SPLITTERS);
    if (prefixSplitter) {
        normAbsolutePath = normAbsolutePath.substring(prefixSplitter.length);
    }

    const suffixSplitter: string | undefined = isEndWith(normAbsolutePath, SPLITTERS);
    if (suffixSplitter) {
        normAbsolutePath = normAbsolutePath.substring(0, normAbsolutePath.length - suffixSplitter.length);
    }
    return normAbsolutePath;
};

export const splitPathParts = (absolutePath?: string | null): string[] => {
    const rootParts: string[] = [];
    if (!absolutePath?.trim()) {
        return rootParts;
    }
    const normAbsolutePath: string = normalizePath(absolutePath);
    if (!normAbsolutePath) {
        return rootParts;
    }
    let parts: string[] = [normAbsolutePath];
    for (const splitter of SPLITTERS) {
        parts = parts.flatMap((part) => part.split(splitter));
    }
    return parts;
};
