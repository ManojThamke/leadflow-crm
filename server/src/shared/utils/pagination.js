export const getPagination = ({
    page = 1,
    limit = 10,
}) => {
    page = Math.max(Number(page), 1);

    limit = Math.min(
        Math.max(Number(limit), 1),
        100
    );

    return {
        page,
        limit,
        skip: (page - 1) * limit,
    };
};