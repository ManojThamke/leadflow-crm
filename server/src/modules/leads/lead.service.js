import ApiError from "../../shared/errors/ApiError.js";

import {
  createLead,
  findLeadByEmail,
  findLeadById,
  findAllLeads,
  updateLead,
  softDeleteLead,
} from "./lead.repository.js";

export const createLeadService = async (payload) => {
  const existingLead = await findLeadByEmail(payload.email);

  if (existingLead) {
    throw new ApiError(
      409,
      "A lead with this email already exists."
    );
  }

  return await createLead(payload);
};

export const getAllLeadsService = async (query) => {
  return await findAllLeads(query);
};

export const getLeadByIdService = async (id) => {
  const lead = await findLeadById(id);

  if (!lead) {
    throw new ApiError(404, "Lead not found.");
  }

  return lead;
};

export const updateLeadService = async (id, payload) => {
  const lead = await updateLead(id, payload);

  if (!lead) {
    throw new ApiError(404, "Lead not found.");
  }

  return lead;
};

export const deleteLeadService = async (id) => {
  const lead = await softDeleteLead(id);

  if (!lead) {
    throw new ApiError(404, "Lead not found.");
  }

  return;
};