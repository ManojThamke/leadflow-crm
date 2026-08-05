import Lead from "./lead.model.js";

export const createLead = async (payload) => {
    return await Lead.create(payload);
};

export const findLeadById = async (id) => {
    return await Lead.findOne({
        _id: id,
        isDeleted: false,
    })
        .populate("assignedTo", "name email role")
        .lean();
};

export const updateLead = async (id, payload) => {
    return await Lead.findOneAndUpdate(
        {
            _id: id,
            isDeleted: false,
        },
        payload,
        {
            new: true,
            runValidators: true,
        }
    ).populate("assignedTo", "name email role")
        .lean();
};

export const softDeleteLead = async (id) => {
    return await Lead.findOneAndUpdate(
        {
            _id: id,
            isDeleted: false,
        },
        {
            isDeleted: true,
        },
        {
            new: true,
        }
    );
};

export const findAllLeads = async ({
    page = 1,
    limit = 10,
    search = "",
    status,
    priority,
    assignedTo,
}) => {
    page = Math.max(Number(page), 1);

    limit = Math.min(
        Math.max(Number(limit), 1),
        100
    );

    const skip = (page - 1) * limit;

    const query = {
        isDeleted: false,
        ...(status && { status }),
        ...(priority && { priority }),
        ...(assignedTo && { assignedTo }),
        ...(search && {
            $text: {
                $search: search,
            },
        }),
    };

    const [leads, total] = await Promise.all([
        Lead.find(query)
            .populate("assignedTo", "name email role")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),

        Lead.countDocuments(query),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
        leads,
        pagination: {
            page,
            limit,
            total,
            totalPages,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1,
        },
    };
};

export const findLeadByEmail = async (email) => {
    return await Lead.findOne({
        email,
        isDeleted: false,
    }).lean();
};

export const assignLead = async (leadId, userId) => {
  return await Lead.findOneAndUpdate(
    {
      _id: leadId,
      isDeleted: false,
    },
    {
      assignedTo: userId,
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .populate("assignedTo", "name email role")
    .lean();
};