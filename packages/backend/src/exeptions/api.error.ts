export default class ApiError extends Error {
  status: number;

  errors: Error[];

  constructor(status: number, message: string, errors: Error[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string = 'Bad Request', errors: Error[] = []): ApiError {
    return new ApiError(400, message, errors);
  }

  static UnauthorizedError(message: string = 'Unauthorized', errors: Error[] = []): ApiError {
    return new ApiError(401, message, errors);
  }

  static ForbiddenError(message: string = 'Forbidden', errors: Error[] = []): ApiError {
    return new ApiError(403, message, errors);
  }

  static NotFoundError(message: string = 'Not Found', errors: Error[] = []): ApiError {
    return new ApiError(404, message, errors);
  }

  static InternalServerError(
    message: string = 'Internal Server Error',
    errors: Error[] = []
  ): ApiError {
    return new ApiError(500, message, errors);
  }
}
