import asyncHandler from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../shared/responses/apiResponse.js";

import {
  createLeadService,
  getAllLeadsService,
  getLeadByIdService,
  updateLeadService,
  deleteLeadService,
} from "./lead.service.js";

/**
 * Create a new lead
 */
export const createLead = asyncHandler(async (req, res) => {
  const lead = await createLeadService(req.body);

  return sendSuccess(res, {
    statusCode: 201,
    message: "Lead created successfully.",
    data: lead,
  });
});

/**
 * Get all leads
 */
export const getAllLeads = asyncHandler(async (req, res) => {
  const result = await getAllLeadsService(req.query);

  return sendSuccess(res, {
    message: "Leads fetched successfully.",
    data: result.leads,
    meta: result.pagination,
  });
});

/**
 * Get single lead
 */
export const getLeadById = asyncHandler(async (req, res) => {
  const lead = await getLeadByIdService(req.params.id);

  return sendSuccess(res, {
    message: "Lead fetched successfully.",
    data: lead,
  });
});

/**
 * Update lead
 */
export const updateLead = asyncHandler(async (req, res) => {
  const lead = await updateLeadService(req.params.id, req.body);

  return sendSuccess(res, {
    message: "Lead updated successfully.",
    data: lead,
  });
});

/**
 * Delete lead (Soft Delete)
 */
export const deleteLead = asyncHandler(async (req, res) => {
  const result = await deleteLeadService(req.params.id);

  return sendSuccess(res, {
    message: result.message,
    data: null,
  });
});