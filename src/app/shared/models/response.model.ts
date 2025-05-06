export interface ResponseModel<T> {
  data: T;
  error?: string;
  status: number;
  isFirst?: boolean;
  isLast?: boolean;
  totalPages?: number;
  totalElements?: number;
  pages?: number[];
}
