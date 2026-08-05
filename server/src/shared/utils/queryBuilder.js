export const buildQuery = ({
    search = "",
    filters = {},
}) => {
    const query = {
        isDeleted: false,
    };

    Object.entries(filters).forEach(([key, value]) => {
        if (
            value !== undefined &&
            value !== null &&
            value !== ""
        ) {
            query[key] = value;
        }
    });

    if (search) {
        query.$text = {
            $search: search,
        };
    }

    return query;
};