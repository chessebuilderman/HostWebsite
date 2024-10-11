export function isMobile(userAgent: string) {
    return (/android.+mobile|ip(hone|[oa]d)/i).test(userAgent);
}