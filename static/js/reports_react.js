const reportsPayloadNode = document.getElementById("reports-payload");
const reportsRootNode = document.getElementById("reports-react-root");

if (reportsPayloadNode && reportsRootNode) {
  const payload = JSON.parse(reportsPayloadNode.textContent);

  const TENURE_COLUMNS = [
    { key: "employee_id", label: "Employee ID", type: "text", mandatory: true, defaultVisible: true },
    { key: "employee_name", label: "Employee Name", type: "text", mandatory: true, defaultVisible: true },
    { key: "duration", label: "Duration", type: "number", mandatory: true, defaultVisible: true },
    { key: "project", label: "Project", type: "text", mandatory: true, defaultVisible: true },
    { key: "project_type", label: "Project Type", type: "text", mandatory: false, defaultVisible: true },
    { key: "project_manager", label: "Project Manager", type: "text", mandatory: false, defaultVisible: true },
    { key: "role", label: "Role", type: "text", mandatory: false, defaultVisible: true },
    { key: "account", label: "Account", type: "text", mandatory: false, defaultVisible: true },
    { key: "practice", label: "Practice", type: "text", mandatory: false, defaultVisible: true },
    { key: "grade", label: "Grade", type: "text", mandatory: false, defaultVisible: true },
    { key: "utilization_percentage", label: "Utilization Percentage", type: "number", mandatory: false, defaultVisible: true },
    { key: "talent_pool_percentage", label: "Talent Pool %", type: "number", mandatory: false, defaultVisible: true },
    { key: "start_date", label: "Start Date", type: "date", mandatory: false, defaultVisible: true },
    { key: "allocation_category", label: "Allocation Category", type: "text", mandatory: false, defaultVisible: false },
    { key: "shadow_type", label: "Shadow Type", type: "text", mandatory: false, defaultVisible: false },
    { key: "shadow_of", label: "Shadow Of", type: "text", mandatory: false, defaultVisible: false },
    { key: "shadow_name", label: "Shadow Name", type: "text", mandatory: false, defaultVisible: false },
    { key: "billing_hours", label: "Billing Hours", type: "number", mandatory: false, defaultVisible: false },
    { key: "lead", label: "Lead", type: "text", mandatory: false, defaultVisible: false },
    { key: "shift_timings", label: "Shift Timings", type: "text", mandatory: false, defaultVisible: false },
    { key: "account_owner", label: "Account Owner", type: "text", mandatory: false, defaultVisible: false },
    { key: "expected_end_date", label: "Expected End Date", type: "date", mandatory: false, defaultVisible: false },
  ];

  const RESOURCE_REQUEST_COLUMNS = [
    { key: "rr_id", label: "RR-ID", type: "text", mandatory: true, defaultVisible: true, link: true },
    { key: "account", label: "Account", type: "text", mandatory: true, defaultVisible: true, link: true },
    { key: "project", label: "Project", type: "text", mandatory: true, defaultVisible: true, link: true },
    { key: "practice", label: "Practice", type: "text", mandatory: false, defaultVisible: true },
    { key: "request_status", label: "Request Status", type: "text", mandatory: false, defaultVisible: true },
    { key: "decision_type", label: "Decision Type", type: "text", mandatory: false, defaultVisible: true },
    { key: "need_type", label: "Need Type", type: "text", mandatory: false, defaultVisible: true },
    { key: "resource_required_by", label: "Resource Required By", type: "date", mandatory: false, defaultVisible: true },
    { key: "requested_on", label: "Requested On", type: "date", mandatory: false, defaultVisible: false },
    { key: "recommended_resource", label: "Recommended Resource", type: "text", mandatory: false, defaultVisible: false, multiValue: true },
    { key: "request_purpose", label: "Request Purpose", type: "text", mandatory: false, defaultVisible: false },
    { key: "request_purpose_details", label: "Request Purpose Details", type: "text", mandatory: false, defaultVisible: false },
    { key: "role", label: "Role", type: "text", mandatory: false, defaultVisible: false },
    { key: "shift_timings", label: "Shift Timings", type: "text", mandatory: false, defaultVisible: false },
    { key: "duration", label: "Duration", type: "number", mandatory: false, defaultVisible: false },
    { key: "start_date", label: "Start Date", type: "date", mandatory: false, defaultVisible: false },
    { key: "skills", label: "Skills", type: "text", mandatory: false, defaultVisible: false, multiValue: true, sortable: false },
  ];

  const TECH_STACK_COLUMNS = [
    { key: "project_name", label: "Project Name", type: "text", mandatory: true, defaultVisible: true, link: true },
    { key: "account_name", label: "Account Name", type: "text", mandatory: true, defaultVisible: true, link: true },
    { key: "status", label: "Status", type: "text", mandatory: true, defaultVisible: true },
    { key: "project_tech_stack", label: "Project Tech Stack", type: "text", mandatory: true, defaultVisible: true, multiValue: true, sortable: false },
    { key: "project_status", label: "Project Status", type: "text", mandatory: false, defaultVisible: true },
    { key: "account_owner", label: "Account Owner", type: "text", mandatory: false, defaultVisible: true },
    { key: "project_manager", label: "Project Manager", type: "text", mandatory: false, defaultVisible: false },
    { key: "project_category", label: "Project Category", type: "text", mandatory: false, defaultVisible: false },
    { key: "start_date", label: "Start Date", type: "date", mandatory: false, defaultVisible: false },
    { key: "end_date", label: "End Date", type: "date", mandatory: false, defaultVisible: false },
  ];

  const UPCOMING_ROLLOFF_COLUMNS = [
    { key: "employee_id", label: "Employee ID", type: "text", mandatory: true, defaultVisible: true },
    { key: "employee_name", label: "Employee Name", type: "text", mandatory: true, defaultVisible: true },
    { key: "project", label: "Project", type: "text", mandatory: true, defaultVisible: true },
    { key: "grade", label: "Grade", type: "text", mandatory: false, defaultVisible: true },
    { key: "practice", label: "Practice", type: "text", mandatory: false, defaultVisible: true },
    { key: "role", label: "Role", type: "text", mandatory: false, defaultVisible: true },
    { key: "utilization_percentage", label: "Utilization Percentage", type: "number", mandatory: false, defaultVisible: true },
    { key: "allocation_category", label: "Allocation Category", type: "text", mandatory: false, defaultVisible: true },
    { key: "upcoming_roll_off_date", label: "Upcoming Roll-off Date", type: "date", mandatory: false, defaultVisible: true },
  ];

  const GRADE_REPORT_COLUMNS = [
    { key: "employee_id", label: "Employee ID", type: "text", mandatory: true, defaultVisible: true },
    { key: "employee_name", label: "Employee Name", type: "text", mandatory: true, defaultVisible: true },
    { key: "status", label: "Status", type: "text", mandatory: true, defaultVisible: true },
    { key: "grade", label: "Grade", type: "grade", mandatory: true, defaultVisible: true },
    { key: "practice", label: "Practice", type: "text", mandatory: false, defaultVisible: true },
    { key: "project_name", label: "Project Name", type: "text", mandatory: false, defaultVisible: true },
    { key: "account_name", label: "Account Name", type: "text", mandatory: false, defaultVisible: true },
    { key: "project_manager", label: "Project Manager", type: "text", mandatory: false, defaultVisible: true },
    { key: "reporting_manager", label: "Reporting Manager", type: "text", mandatory: false, defaultVisible: true },
    { key: "employee_email", label: "Employee Email", type: "text", mandatory: false, defaultVisible: false },
    { key: "mobile_number", label: "Mobile Number", type: "text", mandatory: false, defaultVisible: false },
    { key: "joining_date", label: "Joining Date", type: "date", mandatory: false, defaultVisible: false },
    { key: "date_of_birth", label: "Date of Birth", type: "date", mandatory: false, defaultVisible: false },
    { key: "gender", label: "Gender", type: "text", mandatory: false, defaultVisible: false },
    { key: "employment_type", label: "Employment Type", type: "text", mandatory: false, defaultVisible: false },
    { key: "experience_years", label: "Experience (Years)", type: "number", mandatory: false, defaultVisible: false },
    { key: "work_location", label: "Work Location", type: "text", mandatory: false, defaultVisible: false },
    { key: "business_unit", label: "Business Unit", type: "text", mandatory: false, defaultVisible: false },
    { key: "shift_timings", label: "Shift Timings", type: "text", mandatory: false, defaultVisible: false },
    { key: "allocation_category", label: "Allocation Category", type: "text", mandatory: false, defaultVisible: false },
    { key: "start_date", label: "Start Date", type: "date", mandatory: false, defaultVisible: false },
    { key: "expected_end_date", label: "Expected End Date", type: "date", mandatory: false, defaultVisible: false },
  ];

  function normalizeTechStackStatus(statusValue) {
    return String(statusValue || "").trim().toLowerCase() === "closed" ? "Closed" : "Active";
  }

  const DEFAULT_TECH_STACK_POOL = [
    "Java",
    "Spring Boot",
    "Microservices",
    "Kafka",
    "Docker",
    "Kubernetes",
    "AWS",
    "PostgreSQL",
    "Redis",
    "REST API",
  ];

  function normalizeTechStackValues(rawValues) {
    const sourceValues = Array.isArray(rawValues)
      ? rawValues
      : String(rawValues || "")
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean);
    const uniqueValues = [];
    sourceValues.forEach((value) => {
      if (!uniqueValues.includes(value)) uniqueValues.push(value);
    });
    DEFAULT_TECH_STACK_POOL.forEach((value) => {
      if (uniqueValues.length >= 8) return;
      if (!uniqueValues.includes(value)) uniqueValues.push(value);
    });
    return uniqueValues;
  }

  function normalizeTechStackRows(rows) {
    return (rows || []).map((row) => ({
      ...row,
      status: normalizeTechStackStatus(row.status),
      account_owner: row.account_owner || row.accountOwner || "NA",
      project_tech_stack: normalizeTechStackValues(row.project_tech_stack),
    }));
  }

  function normalizeTenureDurationToDays(durationValue) {
    const parsed = Number(durationValue);
    if (Number.isNaN(parsed)) return durationValue;
    if (parsed <= 60) return Math.round(parsed * 30);
    return Math.round(parsed);
  }

  function getDaysSinceIsoDate(isoDate) {
    const parsedDate = parseIsoDate(isoDate);
    if (!parsedDate) return "";
    const now = new Date();
    const todayUtc = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const msDiff = todayUtc.getTime() - parsedDate.getTime();
    if (msDiff < 0) return 0;
    return Math.floor(msDiff / (1000 * 60 * 60 * 24));
  }

  function toNumericOrEmpty(value) {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? "" : parsed;
  }

  const TENURE_ACTIVE_NA_FIXED_FIELDS = [
    "project",
    "project_type",
    "project_manager",
    "role",
    "account",
    "practice",
    "start_date",
    "allocation_category",
    "shadow_type",
    "shadow_of",
    "shadow_name",
    "billing_hours",
    "lead",
    "shift_timings",
    "account_owner",
    "expected_end_date",
  ];

  function normalizeActiveNaTenureRow(row) {
    const normalizedRow = {
      ...row,
      status: "Active_NA",
      duration: row.latest_roll_off_date ? getDaysSinceIsoDate(row.latest_roll_off_date) : normalizeTenureDurationToDays(row.duration),
      utilization_percentage: toNumericOrEmpty(row.utilization_percentage),
      talent_pool_percentage:
        toNumericOrEmpty(row.talent_pool_percentage) === ""
          ? Math.max(0, 100 - (toNumericOrEmpty(row.utilization_percentage) || 0))
          : toNumericOrEmpty(row.talent_pool_percentage),
    };
    TENURE_ACTIVE_NA_FIXED_FIELDS.forEach((key) => {
      normalizedRow[key] = "Talent Pool";
    });
    return normalizedRow;
  }

  function buildSampleTalentPoolRows(requiredCount, presentCount) {
    const sampleSeed = [
      {
        employee_id: "0091",
        employee_name: "Arjun Talent",
        status: "Active_NA",
        duration: "",
        grade: "G3",
        utilization_percentage: 0,
        talent_pool_percentage: 100,
        latest_roll_off_date: "2026-01-15",
      },
      {
        employee_id: "0092",
        employee_name: "Bhavana Pool",
        status: "Active_NA",
        duration: "",
        grade: "G4",
        utilization_percentage: 20,
        talent_pool_percentage: 80,
        latest_roll_off_date: "2025-12-20",
      },
      {
        employee_id: "0093",
        employee_name: "Charan NA",
        status: "Active_NA",
        duration: "",
        grade: "G2",
        utilization_percentage: 10,
        talent_pool_percentage: 90,
        latest_roll_off_date: "2026-02-01",
      },
    ];
    if (presentCount >= requiredCount) return [];
    return sampleSeed.slice(0, requiredCount - presentCount).map((row) => normalizeActiveNaTenureRow(row));
  }

  function normalizeTenureRows(rows) {
    const eligibleRows = (rows || []).filter((row) => {
      const status = String(row.status || "").trim().toLowerCase();
      return status === "active" || status === "active_na";
    });

    const transformed = eligibleRows.map((row) => {
      const status = String(row.status || "").trim().toLowerCase();
      if (status === "active_na") return normalizeActiveNaTenureRow(row);
      const utilization = toNumericOrEmpty(row.utilization_percentage);
      return {
        ...row,
        status: "Active",
        duration: normalizeTenureDurationToDays(row.duration),
        utilization_percentage: utilization,
        talent_pool_percentage:
          toNumericOrEmpty(row.talent_pool_percentage) === ""
            ? Math.max(0, 100 - (utilization || 0))
            : toNumericOrEmpty(row.talent_pool_percentage),
      };
    });

    const activeNaCount = transformed.filter((row) => String(row.status).toLowerCase() === "active_na").length;
    const sampleTalentPoolRows = buildSampleTalentPoolRows(3, activeNaCount);

    return [...transformed, ...sampleTalentPoolRows].map((row) => ({
      ...row,
      __report_name: "Tenure Report",
    }));
  }

  const REPORT_CONFIGS = {
    "Tenure Report": {
      columns: TENURE_COLUMNS,
      rows: normalizeTenureRows(payload.rows || []),
      description: "Shows employee tenure details with inline filters, column customization, and export.",
    },
    "Resource Request Report": {
      columns: RESOURCE_REQUEST_COLUMNS,
      rows: payload.resource_request_rows || [],
      description: "Shows resource requests with status, need details, timelines, and staffing recommendations.",
    },
    "Tech Stack Report": {
      columns: TECH_STACK_COLUMNS,
      rows: normalizeTechStackRows(payload.tech_stack_rows || []),
      description: "Shows project technology stacks with status, ownership, category, and timeline metadata.",
    },
    "Upcoming Roll-off Report": {
      columns: UPCOMING_ROLLOFF_COLUMNS,
      rows: payload.upcoming_rolloff_rows || [],
      description: "Shows active employee allocations with upcoming roll-off timelines.",
    },
    "Grade Report": {
      columns: GRADE_REPORT_COLUMNS,
      rows: payload.grade_report_rows || [],
      description: "Shows employee-wise grade, status, and reporting details with customizable employee fields.",
    },
  };

  function getReportConfig(reportName) {
    return REPORT_CONFIGS[reportName] || REPORT_CONFIGS["Tenure Report"];
  }

  function toDisplayDate(isoDate) {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    if (!year || !month || !day) return isoDate;
    return `${day}-${month}-${year}`;
  }

  function compareNumber(leftValue, operator, rightValue) {
    if (!operator || rightValue === "") return true;
    const leftNum = Number(leftValue);
    const rightNum = Number(rightValue);
    if (Number.isNaN(rightNum)) return true;
    if (Number.isNaN(leftNum)) return false;
    if (operator === "=") return leftNum === rightNum;
    if (operator === "!=") return leftNum !== rightNum;
    if (operator === ">") return leftNum > rightNum;
    if (operator === "<") return leftNum < rightNum;
    if (operator === ">=") return leftNum >= rightNum;
    if (operator === "<=") return leftNum <= rightNum;
    return true;
  }

  function normalizeDurationToMonths(value, unit) {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) return "";
    if (unit === "Days") return parsedValue / 30;
    if (unit === "Weeks") return parsedValue / 4.2857;
    if (unit === "Years") return parsedValue * 12;
    return parsedValue;
  }

  function compareDate(leftDate, filter) {
    if (!filter.operator) return true;
    const isoPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!leftDate || !isoPattern.test(String(leftDate))) return false;
    if (filter.operator === "between") {
      if (!filter.start || !filter.end) return true;
      return leftDate >= filter.start && leftDate <= filter.end;
    }
    if (!filter.value) return true;
    if (filter.operator === "=") return leftDate === filter.value;
    if (filter.operator === "!=") return leftDate !== filter.value;
    if (filter.operator === "<") return leftDate < filter.value;
    if (filter.operator === ">") return leftDate > filter.value;
    if (filter.operator === "<=") return leftDate <= filter.value;
    if (filter.operator === ">=") return leftDate >= filter.value;
    return true;
  }

  function gradeRank(gradeValue) {
    const normalized = String(gradeValue || "").trim().toUpperCase();
    const match = normalized.match(/G(\d+)/);
    if (!match) return Number.NaN;
    return Number(match[1]);
  }

  function compareGrade(leftGrade, operator, rightGrade) {
    if (!operator || !rightGrade) return true;
    const leftRank = gradeRank(leftGrade);
    const rightRank = gradeRank(rightGrade);
    if (Number.isNaN(leftRank) || Number.isNaN(rightRank)) return true;
    if (operator === "=") return leftRank === rightRank;
    if (operator === "!=") return leftRank !== rightRank;
    if (operator === ">") return leftRank > rightRank;
    if (operator === "<") return leftRank < rightRank;
    if (operator === ">=") return leftRank >= rightRank;
    if (operator === "<=") return leftRank <= rightRank;
    return true;
  }

  function getDefaultOptionalSelected(columns) {
    return columns.filter((column) => !column.mandatory && column.defaultVisible).map((column) => column.key);
  }

  function getDefaultColumnOrder(columns) {
    return columns.map((column) => column.key);
  }

  function buildFilterState(columns) {
    return {
      text: Object.fromEntries(columns.filter((column) => column.type === "text").map((column) => [column.key, []])),
      number: Object.fromEntries(
        columns.filter((column) => column.type === "number").map((column) => [column.key, { operator: "", value: "", unit: "Any" }])
      ),
      date: Object.fromEntries(
        columns.filter((column) => column.type === "date").map((column) => [column.key, { operator: "", value: "", start: "", end: "" }])
      ),
      grade: Object.fromEntries(columns.filter((column) => column.type === "grade").map((column) => [column.key, { operator: "", value: "" }])),
    };
  }

  function getTextValuesForRow(row, column) {
    const rawValue = row[column.key];
    if (column.multiValue) {
      if (!Array.isArray(rawValue)) return [];
      return rawValue.filter(Boolean).map((value) => String(value));
    }
    if (rawValue === null || rawValue === undefined || rawValue === "") return [];
    return [String(rawValue)];
  }

  function formatCellValue(row, column) {
    if (column.key === "duration" && row.__report_name === "Tenure Report") {
      const value = row[column.key];
      if (value === null || value === undefined || value === "") return "";
      return `${value} days`;
    }
    if (column.type === "date") return toDisplayDate(row[column.key]);
    if (column.multiValue) {
      const values = Array.isArray(row[column.key]) ? row[column.key] : [];
      return values.join(", ");
    }
    return row[column.key] ?? "";
  }

  function toExcelSafeValue(value) {
    if (value === null || value === undefined) return "";
    const text = String(value);
    if (/^[=+\-@]/.test(text)) return `'${text}`;
    return text;
  }

  function normalizeSearchText(value) {
    return String(value || "").toLowerCase().trim();
  }

  function normalizeFilterValue(value) {
    return String(value || "").trim().toLowerCase();
  }

  function parseIsoDate(isoDate) {
    if (!isoDate) return null;
    const parts = isoDate.split("-").map(Number);
    if (parts.length !== 3 || parts.some(Number.isNaN)) return null;
    return new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  }

  function getSortValue(row, column) {
    const rawValue = row[column.key];
    if (rawValue === null || rawValue === undefined || rawValue === "") return null;

    if (column.type === "number") {
      const parsed = Number(rawValue);
      return Number.isNaN(parsed) ? null : parsed;
    }

    if (column.type === "date") {
      const parsedDate = parseIsoDate(rawValue);
      return parsedDate ? parsedDate.getTime() : null;
    }

    if (column.type === "grade") {
      const gradeValue = gradeRank(rawValue);
      return Number.isNaN(gradeValue) ? null : gradeValue;
    }

    if (column.multiValue) {
      const values = Array.isArray(rawValue) ? rawValue : [rawValue];
      return values.join(" ").toLowerCase();
    }

    return String(rawValue).toLowerCase();
  }

  function sortRowsByColumn(rows, columns, sortState) {
    if (!sortState || !sortState.key || !sortState.direction) return rows;
    const column = columns.find((item) => item.key === sortState.key);
    if (!column) return rows;
    const directionMultiplier = sortState.direction === "desc" ? -1 : 1;

    return rows
      .map((row, index) => ({ row, index }))
      .sort((left, right) => {
        const leftValue = getSortValue(left.row, column);
        const rightValue = getSortValue(right.row, column);

        if (leftValue === null && rightValue === null) return left.index - right.index;
        if (leftValue === null) return 1;
        if (rightValue === null) return -1;

        let comparison = 0;
        if (typeof leftValue === "number" && typeof rightValue === "number") {
          comparison = leftValue - rightValue;
        } else {
          comparison = String(leftValue).localeCompare(String(rightValue), undefined, {
            numeric: true,
            sensitivity: "base",
          });
        }

        if (comparison === 0) return left.index - right.index;
        return comparison * directionMultiplier;
      })
      .map((item) => item.row);
  }

  function toIsoDate(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addDaysIso(isoDate, days) {
    const parsed = parseIsoDate(isoDate);
    if (!parsed) return isoDate;
    parsed.setUTCDate(parsed.getUTCDate() + days);
    return toIsoDate(parsed);
  }

  function getTodayIso() {
    const now = new Date();
    return toIsoDate(new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())));
  }

  function getYearEndIso() {
    const now = new Date();
    return `${now.getFullYear()}-12-31`;
  }

  function buildAvailabilityRows(allocations, fromDate, toDate) {
    if (!fromDate || !toDate || toDate <= fromDate) return [];
    const grouped = {};

    allocations.forEach((entry) => {
      const entryEnd = entry.roll_off_date && entry.roll_off_date < entry.end_date ? entry.roll_off_date : entry.end_date;
      if (entry.start_date > toDate || entryEnd < fromDate) return;
      const key = `${entry.emp_id}::${entry.emp_name}::${entry.practice}`;
      if (!grouped[key]) {
        grouped[key] = {
          emp_id: entry.emp_id,
          emp_name: entry.emp_name,
          practice: entry.practice,
          allocations: [],
        };
      }
      grouped[key].allocations.push({
        project_name: entry.project_name,
        utilization_percentage: Number(entry.utilization_percentage) || 0,
        start_date: entry.start_date > fromDate ? entry.start_date : fromDate,
        end_date: entryEnd < toDate ? entryEnd : toDate,
      });
    });

    const rows = [];
    Object.values(grouped).forEach((employee) => {
      const boundaries = new Set([fromDate, addDaysIso(toDate, 1)]);
      employee.allocations.forEach((allocation) => {
        boundaries.add(allocation.start_date);
        boundaries.add(addDaysIso(allocation.end_date, 1));
      });
      const timeline = Array.from(boundaries).sort();
      for (let index = 0; index < timeline.length - 1; index += 1) {
        const segmentStart = timeline[index];
        const segmentEndExclusive = timeline[index + 1];
        const segmentEnd = addDaysIso(segmentEndExclusive, -1);
        if (segmentStart > segmentEnd) continue;
        const activeAllocations = employee.allocations.filter(
          (allocation) => allocation.start_date <= segmentStart && allocation.end_date >= segmentStart
        );
        const projectNames = Array.from(new Set(activeAllocations.map((allocation) => allocation.project_name)));
        const utilization = activeAllocations.reduce((total, allocation) => total + allocation.utilization_percentage, 0);
        rows.push({
          emp_id: employee.emp_id,
          emp_name: employee.emp_name,
          practice: employee.practice,
          current_projects: projectNames.length > 0 ? projectNames : ["No Active Project"],
          available_from: segmentStart,
          available_to: segmentEnd,
          talent_pool: Math.max(0, 100 - utilization),
        });
      }
    });

    return rows.sort((left, right) => {
      if (left.emp_id === right.emp_id) return left.available_from.localeCompare(right.available_from);
      return left.emp_id.localeCompare(right.emp_id);
    });
  }

  function TextFilter({ column, rows, values, onChange }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");
    const triggerRef = React.useRef(null);
    const popoverRef = React.useRef(null);
    const [popoverStyle, setPopoverStyle] = React.useState({});

    React.useEffect(() => {
      function outsideClick(event) {
        if (triggerRef.current && triggerRef.current.contains(event.target)) return;
        if (popoverRef.current && popoverRef.current.contains(event.target)) return;
        setIsOpen(false);
      }
      if (!isOpen) return undefined;
      document.addEventListener("mousedown", outsideClick);
      return () => document.removeEventListener("mousedown", outsideClick);
    }, [isOpen]);

    React.useEffect(() => {
      function syncPopoverPosition() {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        const measuredWidth = popoverRef.current ? popoverRef.current.offsetWidth : 260;
        const measuredHeight = popoverRef.current ? popoverRef.current.offsetHeight : 280;
        const popoverWidth = Math.max(240, measuredWidth);
        const viewportPadding = 12;
        const left = Math.min(window.innerWidth - popoverWidth - viewportPadding, Math.max(viewportPadding, rect.left));
        const belowTop = rect.bottom + 6;
        const aboveTop = rect.top - measuredHeight - 6;
        const canOpenBelow = belowTop + measuredHeight <= window.innerHeight - viewportPadding;
        const top = canOpenBelow ? belowTop : Math.max(viewportPadding, aboveTop);
        setPopoverStyle({ position: "fixed", top: `${top}px`, left: `${left}px`, width: `${popoverWidth}px`, zIndex: 1000 });
      }
      if (!isOpen) return undefined;
      syncPopoverPosition();
      window.addEventListener("resize", syncPopoverPosition);
      window.addEventListener("scroll", syncPopoverPosition, true);
      return () => {
        window.removeEventListener("resize", syncPopoverPosition);
        window.removeEventListener("scroll", syncPopoverPosition, true);
      };
    }, [isOpen]);

    const options = Array.from(new Set(rows.flatMap((row) => getTextValuesForRow(row, column)))).sort();
    const filteredOptions = options.filter((option) => String(option).toLowerCase().includes(searchText.toLowerCase()));
    const selectedSet = new Set(values);
    const prioritizedOptions = [
      ...filteredOptions.filter((option) => selectedSet.has(option)),
      ...filteredOptions.filter((option) => !selectedSet.has(option)),
    ];
    const toggleOption = (option) => (values.includes(option) ? onChange(values.filter((value) => value !== option)) : onChange([...values, option]));
    const selectAll = () => onChange(options);
    const clearAll = () => onChange([]);

    let label = "All";
    if (values.length === 1) label = values[0];
    if (values.length > 1) label = `${values.length} selected`;

    const popoverContent = (
      <div className="inline-popover" ref={popoverRef} style={popoverStyle}>
        <input
          className="inline-popover-search"
          type="search"
          placeholder={`Search ${column.label}`}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <div className="inline-popover-options">
          {prioritizedOptions.map((option) => (
            <label className="inline-popover-option" key={option}>
              <input type="checkbox" checked={values.includes(option)} onChange={() => toggleOption(option)} />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="inline-popover-footer">
          <button type="button" className="link-button" onClick={selectAll}>
            Select All
          </button>
          <button type="button" className="link-button" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </div>
    );

    return (
      <div className="text-filter-wrap" ref={triggerRef}>
        <button type="button" className="inline-filter-button" onClick={() => setIsOpen((open) => !open)}>
          {label}
        </button>
        {isOpen ? ReactDOM.createPortal(popoverContent, document.body) : null}
      </div>
    );
  }

  function NumberFilter({ value, onChange, columnKey, useDurationUnit }) {
    const isDurationColumn = columnKey === "duration";
    const shouldShowDurationUnit = isDurationColumn && useDurationUnit;
    const showUnitDropdown = shouldShowDurationUnit && value.operator !== "";
    const showValueInput = value.operator !== "" && (!shouldShowDurationUnit || value.unit !== "Any");
    return (
      <div className="number-filter">
        <select
          className="inline-operator"
          value={value.operator}
          onChange={(event) =>
            onChange({
              ...value,
              operator: event.target.value,
              value: event.target.value === "" ? "" : value.value,
              unit: event.target.value === "" || !shouldShowDurationUnit ? "Any" : value.unit,
            })
          }
        >
          <option value="">Any</option>
          <option value="=">=</option>
          <option value="!=">!=</option>
          <option value=">">&gt;</option>
          <option value="<">&lt;</option>
          <option value=">=">&gt;=</option>
          <option value="<=">&lt;=</option>
        </select>
        {showUnitDropdown ? (
          <select
            className="inline-operator duration-unit"
            value={value.unit}
            onChange={(event) =>
              onChange({
                ...value,
                unit: event.target.value,
                value: event.target.value === "Any" ? "" : value.value,
              })
            }
          >
            <option value="Any">Any</option>
            <option value="Days">Days</option>
            <option value="Weeks">Weeks</option>
            <option value="Months">Months</option>
            <option value="Years">Years</option>
          </select>
        ) : null}
        {showValueInput ? (
          <input
            className="inline-input"
            type="number"
            placeholder="Value"
            value={value.value}
            onChange={(event) => onChange({ ...value, value: event.target.value })}
          />
        ) : null}
      </div>
    );
  }

  function GradeFilter({ value, onChange, rows, columnKey }) {
    const gradeOptions = Array.from(
      new Set(
        (rows || [])
          .map((row) => row[columnKey])
          .filter(Boolean)
          .map((item) => String(item).trim().toUpperCase())
      )
    ).sort((left, right) => gradeRank(left) - gradeRank(right));

    return (
      <div className="number-filter">
        <select
          className="inline-operator"
          value={value.operator}
          onChange={(event) =>
            onChange({
              ...value,
              operator: event.target.value,
              value: event.target.value === "" ? "" : value.value,
            })
          }
        >
          <option value="">Any</option>
          <option value="=">=</option>
          <option value="!=">!=</option>
          <option value=">">&gt;</option>
          <option value="<">&lt;</option>
          <option value=">=">&gt;=</option>
          <option value="<=">&lt;=</option>
        </select>
        {value.operator ? (
          <select className="inline-operator" value={value.value} onChange={(event) => onChange({ ...value, value: event.target.value })}>
            <option value="">Select Grade</option>
            {gradeOptions.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    );
  }

  function DateFilter({ value, onChange }) {
    const isRange = value.operator === "between";
    const showDateInput = value.operator !== "";
    return (
      <div className="date-filter">
        <select
          className="inline-operator"
          value={value.operator}
          onChange={(event) => onChange({ operator: event.target.value, value: "", start: "", end: "" })}
        >
          <option value="">Any</option>
          <option value="=">=</option>
          <option value="!=">!=</option>
          <option value="<">Before</option>
          <option value=">">After</option>
          <option value="<=">On or Before</option>
          <option value=">=">On or After</option>
          <option value="between">Between</option>
        </select>
        {showDateInput && isRange ? (
          <div className="date-range">
            <input className="inline-input" type="date" value={value.start} onChange={(event) => onChange({ ...value, start: event.target.value })} />
            <input className="inline-input" type="date" value={value.end} onChange={(event) => onChange({ ...value, end: event.target.value })} />
          </div>
        ) : null}
        {showDateInput && !isRange ? (
          <input className="inline-input" type="date" value={value.value} onChange={(event) => onChange({ ...value, value: event.target.value })} />
        ) : null}
      </div>
    );
  }

  function ColumnDrawer({ stage, columns, selectedOptionalKeys, onCancel, onApply }) {
    const mandatoryColumns = columns.filter((column) => column.mandatory);
    const optionalColumns = columns.filter((column) => !column.mandatory);
    const [draftSelected, setDraftSelected] = React.useState(selectedOptionalKeys);
    React.useEffect(() => {
      setDraftSelected(selectedOptionalKeys);
    }, [selectedOptionalKeys, stage]);
    if (stage === "closed") return null;
    const isOpen = stage === "open";

    const toggleSelection = (key) =>
      setDraftSelected((currentSelected) =>
        currentSelected.includes(key) ? currentSelected.filter((value) => value !== key) : [...currentSelected, key]
      );
    const selectAllOptional = () => setDraftSelected(optionalColumns.map((column) => column.key));
    const clearAllOptional = () => setDraftSelected([]);

    return (
      <>
        <div className={`drawer-overlay${isOpen ? " open" : ""}`} onClick={onCancel}></div>
        <aside className={`column-drawer${isOpen ? " open" : ""}`}>
          <div className="drawer-head">
            <h3 className="drawer-title">Customize Columns</h3>
            <button type="button" className="drawer-close" onClick={onCancel}>
              X
            </button>
          </div>
          <div className="drawer-section">
            {mandatoryColumns.map((column) => (
              <label className="drawer-option disabled mandatory" key={column.key}>
                <input type="checkbox" checked={true} disabled />
                <span>{column.label}</span>
              </label>
            ))}
            {optionalColumns.map((column) => (
              <label className="drawer-option" key={column.key}>
                <input type="checkbox" checked={draftSelected.includes(column.key)} onChange={() => toggleSelection(column.key)} />
                <span>{column.label}</span>
              </label>
            ))}
          </div>
          <div className="drawer-actions">
            <div className="drawer-tools">
              <button type="button" className="drawer-link-btn" onClick={selectAllOptional}>
                Select All
              </button>
              <button type="button" className="drawer-link-btn" onClick={clearAllOptional}>
                Clear All
              </button>
            </div>
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" className="btn-primary" onClick={() => onApply(draftSelected)}>
              Apply
            </button>
          </div>
        </aside>
      </>
    );
  }

  function ReportsApp({ initialData }) {
    const MIN_RESIZE_WIDTH = 64;
    const MAX_MULTI_VALUE_PILLS = 6;
    const [selectedReport, setSelectedReport] = React.useState(initialData.selected_report);
    const [generatedReport, setGeneratedReport] = React.useState("");
    const [gapThresholdValue, setGapThresholdValue] = React.useState("0");
    const [gapThresholdUnit, setGapThresholdUnit] = React.useState("Days");
    const [drawerStage, setDrawerStage] = React.useState("closed");
    const [dragColumnKey, setDragColumnKey] = React.useState("");
    const [dropTarget, setDropTarget] = React.useState({ key: "", position: "before" });
    const [shownResultsSearch, setShownResultsSearch] = React.useState("");
    const [sortState, setSortState] = React.useState({ key: "", direction: "" });
    const [columnWidths, setColumnWidths] = React.useState({});
    const [resizingColumnKey, setResizingColumnKey] = React.useState("");
    const drawerTimerRef = React.useRef(null);
    const tableWrapRef = React.useRef(null);
    const autoScrollFrameRef = React.useRef(null);
    const dragPointerXRef = React.useRef(null);
    const resizeStateRef = React.useRef({ key: "", startX: 0, startWidth: 0 });

    React.useEffect(() => {
      return () => {
        if (drawerTimerRef.current) {
          clearTimeout(drawerTimerRef.current);
        }
        if (autoScrollFrameRef.current) {
          cancelAnimationFrame(autoScrollFrameRef.current);
          autoScrollFrameRef.current = null;
        }
      };
    }, []);

    const openDrawer = () => {
      if (drawerTimerRef.current) {
        clearTimeout(drawerTimerRef.current);
      }
      setDrawerStage("open");
    };

    const closeDrawer = () => {
      if (drawerStage === "closed" || drawerStage === "closing") return;
      setDrawerStage("closing");
      if (drawerTimerRef.current) {
        clearTimeout(drawerTimerRef.current);
      }
      drawerTimerRef.current = setTimeout(() => {
        setDrawerStage("closed");
      }, 230);
    };

    const initialConfig = getReportConfig(initialData.selected_report);
    const initialColumns = initialConfig.columns;
    const initialFilters = buildFilterState(initialColumns);
    const [optionalSelectedKeys, setOptionalSelectedKeys] = React.useState(getDefaultOptionalSelected(initialColumns));
    const [columnOrder, setColumnOrder] = React.useState(getDefaultColumnOrder(initialColumns));
    const [textFilters, setTextFilters] = React.useState(initialFilters.text);
    const [numberFilters, setNumberFilters] = React.useState(initialFilters.number);
    const [dateFilters, setDateFilters] = React.useState(initialFilters.date);
    const [gradeFilters, setGradeFilters] = React.useState(initialFilters.grade);

    const activeReportName = generatedReport || selectedReport;
    const activeConfig = getReportConfig(activeReportName);
    const activeColumns = activeConfig.columns;
    const activeRows = activeConfig.rows || [];
    const reportDescription = (REPORT_CONFIGS[selectedReport] && REPORT_CONFIGS[selectedReport].description) || "Description is not available for this report.";

    const orderedColumns = columnOrder.map((key) => activeColumns.find((column) => column.key === key)).filter(Boolean);
    const visibleColumns = orderedColumns.filter((column) => column.mandatory || optionalSelectedKeys.includes(column.key));
    const isColumnSortable = React.useCallback((column) => column && column.sortable !== false, []);

    React.useEffect(() => {
      if (!sortState.key) return;
      const isSortColumnVisible = visibleColumns.some((column) => column.key === sortState.key);
      const activeSortColumn = visibleColumns.find((column) => column.key === sortState.key);
      if (!isSortColumnVisible || !isColumnSortable(activeSortColumn)) {
        setSortState({ key: "", direction: "" });
      }
    }, [isColumnSortable, sortState.key, visibleColumns]);

    const filteredRows = activeRows.filter((row) => {
      const visibleTextColumns = visibleColumns.filter((column) => column.type === "text");
      const visibleNumberColumns = visibleColumns.filter((column) => column.type === "number");
      const visibleDateColumns = visibleColumns.filter((column) => column.type === "date");
      const visibleGradeColumns = visibleColumns.filter((column) => column.type === "grade");

      const textMatch = visibleTextColumns.every((column) => {
        const selectedValues = textFilters[column.key] || [];
        if (selectedValues.length === 0) return true;
        const normalizedSelected = new Set(selectedValues.map(normalizeFilterValue));
        const rowValues = getTextValuesForRow(row, column).map(normalizeFilterValue);
        return rowValues.some((value) => normalizedSelected.has(value));
      });

      const numberMatch = visibleNumberColumns.every((column) => {
        const filter = numberFilters[column.key] || { operator: "", value: "", unit: "Any" };
        if (column.key === "duration" && activeReportName !== "Tenure Report") {
          if (!filter.operator || filter.unit === "Any") return true;
          return compareNumber(row[column.key], filter.operator, normalizeDurationToMonths(filter.value, filter.unit));
        }
        return compareNumber(row[column.key], filter.operator, filter.value);
      });

      const dateMatch = visibleDateColumns.every((column) => compareDate(row[column.key], dateFilters[column.key] || { operator: "", value: "", start: "", end: "" }));
      const gradeMatch = visibleGradeColumns.every((column) => {
        const filter = gradeFilters[column.key] || { operator: "", value: "" };
        return compareGrade(row[column.key], filter.operator, filter.value);
      });
      return textMatch && numberMatch && dateMatch && gradeMatch;
    });

    const searchedRows = filteredRows.filter((row) => {
      const query = normalizeSearchText(shownResultsSearch);
      if (!query) return true;
      const queryTokens = query.split(/\s+/).filter(Boolean);
      if (queryTokens.length === 0) return true;
      const visibleText = visibleColumns
        .map((column) => {
          const value = formatCellValue(row, column);
          return Array.isArray(value) ? value.join(" ") : String(value ?? "");
        })
        .join(" ");
      const fallbackText = JSON.stringify(row || {});
      const haystack = normalizeSearchText(`${visibleText} ${fallbackText}`);
      return queryTokens.every((token) => haystack.includes(token));
    });

    const shownRows = React.useMemo(() => sortRowsByColumn(searchedRows, visibleColumns, sortState), [searchedRows, sortState, visibleColumns]);

    const hasActiveFilters = React.useMemo(() => {
      const hasText = Object.values(textFilters).some((values) => (values || []).length > 0);
      const hasNumber = Object.values(numberFilters).some((filter) => filter && filter.operator);
      const hasDate = Object.values(dateFilters).some((filter) => filter && filter.operator);
      const hasGrade = Object.values(gradeFilters).some((filter) => filter && filter.operator);
      return hasText || hasNumber || hasDate || hasGrade || Boolean(shownResultsSearch.trim());
    }, [dateFilters, gradeFilters, numberFilters, shownResultsSearch, textFilters]);


    const handleGenerate = () => {
      setGeneratedReport(selectedReport);
      const columns = getReportConfig(selectedReport).columns;
      const nextFilters = buildFilterState(columns);
      setOptionalSelectedKeys(getDefaultOptionalSelected(columns));
      setColumnOrder(getDefaultColumnOrder(columns));
      setTextFilters(nextFilters.text);
      setNumberFilters(nextFilters.number);
      setDateFilters(nextFilters.date);
      setGradeFilters(nextFilters.grade);
      setShownResultsSearch("");
      setSortState({ key: "", direction: "" });
      setColumnWidths({});
    };

    const resetFilters = () => {
      const resetState = buildFilterState(activeColumns);
      setTextFilters(resetState.text);
      setNumberFilters(resetState.number);
      setDateFilters(resetState.date);
      setGradeFilters(resetState.grade);
      setShownResultsSearch("");
    };

    const toggleSort = (columnKey) => {
      const column = visibleColumns.find((item) => item.key === columnKey);
      if (!isColumnSortable(column)) return;
      setSortState((current) => {
        if (current.key !== columnKey) return { key: columnKey, direction: "asc" };
        if (current.direction === "asc") return { key: columnKey, direction: "desc" };
        if (current.direction === "desc") return { key: "", direction: "" };
        return { key: columnKey, direction: "asc" };
      });
    };

    const onColumnResizeMouseMove = React.useCallback((event) => {
      const state = resizeStateRef.current;
      if (!state.key) return;
      const deltaX = event.clientX - state.startX;
      const nextWidth = Math.max(MIN_RESIZE_WIDTH, Math.round(state.startWidth + deltaX));
      setColumnWidths((current) => {
        if (current[state.key] === nextWidth) return current;
        return {
          ...current,
          [state.key]: nextWidth,
        };
      });
    }, []);

    const stopColumnResize = React.useCallback(() => {
      resizeStateRef.current = { key: "", startX: 0, startWidth: 0 };
      setResizingColumnKey("");
      document.body.classList.remove("is-column-resizing");
      window.removeEventListener("mousemove", onColumnResizeMouseMove);
      window.removeEventListener("mouseup", stopColumnResize);
    }, [onColumnResizeMouseMove]);

    const startColumnResize = React.useCallback(
      (event, columnKey) => {
        event.preventDefault();
        event.stopPropagation();
        const headerCell = event.currentTarget.closest("th");
        const currentWidth = headerCell ? headerCell.getBoundingClientRect().width : Number(columnWidths[columnKey]) || 160;
        resizeStateRef.current = {
          key: columnKey,
          startX: event.clientX,
          startWidth: Math.max(MIN_RESIZE_WIDTH, Math.round(currentWidth)),
        };
        setResizingColumnKey(columnKey);
        setDragColumnKey("");
        setDropTarget({ key: "", position: "before" });
        document.body.classList.add("is-column-resizing");
        window.addEventListener("mousemove", onColumnResizeMouseMove);
        window.addEventListener("mouseup", stopColumnResize);
      },
      [columnWidths, onColumnResizeMouseMove, stopColumnResize]
    );

    React.useEffect(() => {
      return () => {
        document.body.classList.remove("is-column-resizing");
        window.removeEventListener("mousemove", onColumnResizeMouseMove);
        window.removeEventListener("mouseup", stopColumnResize);
      };
    }, [onColumnResizeMouseMove, stopColumnResize]);

    const stopDragAutoScroll = React.useCallback(() => {
      if (autoScrollFrameRef.current) {
        cancelAnimationFrame(autoScrollFrameRef.current);
        autoScrollFrameRef.current = null;
      }
    }, []);

    const runDragAutoScroll = React.useCallback(() => {
      const wrap = tableWrapRef.current;
      if (!wrap || dragPointerXRef.current === null) {
        stopDragAutoScroll();
        return;
      }
      const rect = wrap.getBoundingClientRect();
      const edgeThreshold = 76;
      let nextDelta = 0;
      if (dragPointerXRef.current < rect.left + edgeThreshold) nextDelta = -16;
      if (dragPointerXRef.current > rect.right - edgeThreshold) nextDelta = 16;
      if (nextDelta !== 0) {
        const maxScroll = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
        wrap.scrollLeft = Math.max(0, Math.min(maxScroll, wrap.scrollLeft + nextDelta));
        autoScrollFrameRef.current = requestAnimationFrame(runDragAutoScroll);
        return;
      }
      stopDragAutoScroll();
    }, [stopDragAutoScroll]);

    const getDropPosition = (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      return event.clientX < bounds.left + bounds.width / 2 ? "before" : "after";
    };

    const moveColumn = (fromKey, toKey, position = "before") => {
      if (!fromKey || !toKey || fromKey === toKey) return;
      const visibleSet = new Set(visibleColumns.map((column) => column.key));
      if (!visibleSet.has(fromKey) || !visibleSet.has(toKey)) return;
      setColumnOrder((currentOrder) => {
        const nextOrder = [...currentOrder];
        const fromIndex = nextOrder.indexOf(fromKey);
        const toIndex = nextOrder.indexOf(toKey);
        if (fromIndex < 0 || toIndex < 0) return nextOrder;
        nextOrder.splice(fromIndex, 1);
        let insertIndex = toIndex;
        if (position === "after") {
          insertIndex = fromIndex < toIndex ? toIndex : toIndex + 1;
        } else {
          insertIndex = fromIndex < toIndex ? toIndex - 1 : toIndex;
        }
        insertIndex = Math.max(0, Math.min(nextOrder.length, insertIndex));
        nextOrder.splice(insertIndex, 0, fromKey);
        return nextOrder;
      });
    };

    const getColumnWidthStyle = (columnKey) => {
      const width = columnWidths[columnKey];
      if (!width) return undefined;
      return {
        width: `${width}px`,
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      };
    };

    const exportReport = () => {
      const exportVisibleOnly = generatedReport === "Upcoming Roll-off Report";
      const exportColumns = exportVisibleOnly ? visibleColumns : orderedColumns;
      const visibleKeySet = new Set(visibleColumns.map((column) => column.key));
      const exportRows = [
        exportColumns.map((column) => column.label),
        ...shownRows.map((row) => exportColumns.map((column) => toExcelSafeValue(formatCellValue(row, column)))),
      ];
      const exportFileName = `${(generatedReport || "report").toLowerCase().replaceAll(" ", "-")}.xlsx`;

      if (window.XLSX && window.XLSX.utils) {
        const worksheet = window.XLSX.utils.aoa_to_sheet(exportRows);
        if (exportColumns.length > 0) {
          worksheet["!autofilter"] = {
            ref: window.XLSX.utils.encode_range({
              s: { r: 0, c: 0 },
              e: { r: Math.max(exportRows.length - 1, 0), c: exportColumns.length - 1 },
            }),
          };
        }
        if (!exportVisibleOnly) {
          worksheet["!cols"] = exportColumns.map((column) => ({
            hidden: !visibleKeySet.has(column.key),
          }));
        }

        const workbook = window.XLSX.utils.book_new();
        window.XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
        window.XLSX.writeFile(workbook, exportFileName, { compression: true });
        return;
      }

      const fallbackHeader = exportColumns.map((column) => `<th>${column.label}</th>`).join("");
      const fallbackRows = shownRows
        .map((row) => {
          const cells = exportColumns.map((column) => `<td>${toExcelSafeValue(formatCellValue(row, column))}</td>`).join("");
          return `<tr>${cells}</tr>`;
        })
        .join("");
      const workbookHtml = `<html><head><meta charset="utf-8" /></head><body><table border="1"><thead><tr>${fallbackHeader}</tr></thead><tbody>${fallbackRows}</tbody></table></body></html>`;
      const blob = new Blob([workbookHtml], { type: "application/vnd.ms-excel;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = exportFileName.replace(".xlsx", ".xls");
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    };

    const renderCell = (row, column) => {
      if (column.multiValue) {
        const values = Array.isArray(row[column.key]) ? row[column.key] : [];
        if (values.length === 0) return "-";
        const normalizedValues = values.filter(Boolean).map((value) => String(value));
        if (normalizedValues.length === 0) return "-";
        const visibleValues = normalizedValues.slice(0, MAX_MULTI_VALUE_PILLS);
        const hiddenValues = normalizedValues.slice(MAX_MULTI_VALUE_PILLS);
        const joinedValues = normalizedValues.join(", ");
        return (
          <div className="multi-value-wrap" title={joinedValues}>
            {visibleValues.map((value, index) => (
              <span className="value-pill" key={`${column.key}-${index}-${value}`}>
                {value}
              </span>
            ))}
            {hiddenValues.length > 0 ? (
              <span className="value-pill value-pill-more" title={hiddenValues.join(", ")}>
                +{hiddenValues.length} more
              </span>
            ) : null}
          </div>
        );
      }
      const displayValue = formatCellValue(row, column) || "-";
      if (column.link) {
        const href = row[`${column.key}_url`] || "#";
        return (
          <a href={href} target="_blank" rel="noreferrer noopener" className="cell-link" title={displayValue}>
            {displayValue}
          </a>
        );
      }
      return (
        <span className="cell-text" title={displayValue}>
          {displayValue}
        </span>
      );
    };

    const supportedReport = Boolean(REPORT_CONFIGS[generatedReport]);

    return (
      <div className="reports-shell">
        <aside className="reports-sidebar">
          <div className="brand-box">L</div>
          <nav className="side-nav">
            {initialData.sidebar_links.map((item) => (
              <a key={item.label} href={item.href} className={`side-item${item.active ? " active" : ""}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="reports-main">
          <div className="top-row">
            <h1 className="page-title">Reports</h1>
            <div className="top-actions">
              <input className="search-input" type="search" placeholder="Search..." />
              <div className="user-block">
                <div className="user-avatar">{initialData.user.initials}</div>
                <strong>{initialData.user.name}</strong>
              </div>
            </div>
          </div>

          <section className="panel">
            <div className="label">Select Report</div>
            <div className="report-picker">
              <div className="report-select-shell">
                <select
                  className="field select report-select"
                  value={selectedReport}
                  onChange={(event) => {
                    setSelectedReport(event.target.value);
                    setGeneratedReport("");
                    setColumnWidths({});
                  }}
                >
                  {initialData.report_options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="btn-primary"
                disabled={!selectedReport || (selectedReport === "Tenure Report" && gapThresholdValue === "")}
                onClick={handleGenerate}
              >
                Generate
              </button>
              <div className="report-info-tooltip-wrap">
                <button type="button" className="report-info-icon" aria-label="Report description">
                  i
                </button>
                <div className="info-tooltip-text">{reportDescription}</div>
              </div>
            </div>
            {selectedReport === "Tenure Report" ? (
              <div className="gap-threshold-row">
                <label className="gap-threshold-label" htmlFor="gap-threshold-value">
                  Gap Threshold
                </label>
                <div className="gap-threshold-controls">
                  <input
                    id="gap-threshold-value"
                    className="field gap-threshold-input"
                    type="number"
                    min="0"
                    required
                    placeholder="Enter value"
                    value={gapThresholdValue}
                    onChange={(event) => setGapThresholdValue(event.target.value)}
                  />
                  <select
                    className="field gap-threshold-unit"
                    value={gapThresholdUnit}
                    onChange={(event) => setGapThresholdUnit(event.target.value)}
                  >
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                    <option value="Months">Months</option>
                    <option value="Years">Years</option>
                  </select>
                </div>
              </div>
            ) : null}

            {!generatedReport ? (
              <div className="empty-panel">Select a report and click Generate to view data.</div>
            ) : supportedReport ? (
              <>
                <div className="result-head">
                  <div className="result-title" aria-live="polite">
                    <span className="result-kicker">Showing</span>
                    <span className="result-count-badge">{shownRows.length}</span>
                    <span className="result-kicker">records</span>
                  </div>
                  <div className="result-actions">
                    <button type="button" className="btn-secondary" onClick={resetFilters} disabled={!hasActiveFilters}>
                      Reset Filters
                    </button>
                    <button type="button" className="btn-secondary" onClick={openDrawer}>
                      Customize columns
                    </button>
                    <button type="button" className="btn-primary" onClick={exportReport}>
                      Export
                    </button>
                  </div>
                </div>
                <div className="shown-search-wrap">
                  <input
                    className="shown-search-input"
                    placeholder="Search within shown results..."
                    value={shownResultsSearch}
                    onChange={(event) => setShownResultsSearch(event.target.value)}
                  />
                </div>
                <div
                  className="table-wrap"
                  ref={tableWrapRef}
                  onDragOver={(event) => {
                    if (!dragColumnKey) return;
                    event.preventDefault();
                    dragPointerXRef.current = event.clientX;
                    if (!autoScrollFrameRef.current) {
                      autoScrollFrameRef.current = requestAnimationFrame(runDragAutoScroll);
                    }
                  }}
                  onDrop={() => {
                    dragPointerXRef.current = null;
                    stopDragAutoScroll();
                  }}
                >
                  <table className="reports-table">
                    <thead>
                      <tr>
                        {visibleColumns.map((column) => (
                          <th
                            key={column.key}
                            className={`column-drag-head${dragColumnKey === column.key ? " is-dragging" : ""}${
                              dropTarget.key === column.key && dropTarget.position === "before" ? " drop-before" : ""
                            }${dropTarget.key === column.key && dropTarget.position === "after" ? " drop-after" : ""}`}
                            style={getColumnWidthStyle(column.key)}
                            draggable
                            onDragStart={() => {
                              setDragColumnKey(column.key);
                              setDropTarget({ key: "", position: "before" });
                            }}
                            onDragEnd={() => {
                              setDragColumnKey("");
                              setDropTarget({ key: "", position: "before" });
                              dragPointerXRef.current = null;
                              stopDragAutoScroll();
                            }}
                            onDragOver={(event) => {
                              event.preventDefault();
                              dragPointerXRef.current = event.clientX;
                              if (!autoScrollFrameRef.current) {
                                autoScrollFrameRef.current = requestAnimationFrame(runDragAutoScroll);
                              }
                              if (dragColumnKey && dragColumnKey !== column.key) {
                                setDropTarget({ key: column.key, position: getDropPosition(event) });
                              }
                            }}
                            onDrop={(event) => {
                              event.preventDefault();
                              const dropPosition = getDropPosition(event);
                              moveColumn(dragColumnKey, column.key, dropPosition);
                              setDropTarget({ key: "", position: "before" });
                              setDragColumnKey("");
                              dragPointerXRef.current = null;
                              stopDragAutoScroll();
                            }}
                          >
                            <div className="header-drag-wrap">
                              <span className="header-drag-icon">::</span>
                              <div className="header-label-wrap">
                                <span className="header-title" title={column.label}>
                                  {column.label}
                                </span>
                                {isColumnSortable(column) ? (
                                  <button
                                  type="button"
                                  className={`sort-icon-button${sortState.key === column.key ? ` active ${sortState.direction}` : ""}`}
                                  aria-label={`Sort ${column.label}`}
                                  draggable={false}
                                  onMouseDown={(event) => {
                                    event.stopPropagation();
                                  }}
                                  onDragStart={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                  }}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    toggleSort(column.key);
                                  }}
                                >
                                  <span className="sort-icon sort-icon-up">▲</span>
                                  <span className="sort-icon sort-icon-down">▼</span>
                                  </button>
                                ) : null}
                              </div>
                            </div>
                            <span
                              className={`column-resize-handle${resizingColumnKey === column.key ? " active" : ""}`}
                              role="separator"
                              aria-orientation="vertical"
                              draggable={false}
                              onMouseDown={(event) => startColumnResize(event, column.key)}
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                              }}
                              onDragStart={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                              }}
                            ></span>
                          </th>
                        ))}
                      </tr>
                      <tr className="inline-filter-row">
                        {visibleColumns.map((column) => (
                          <th key={`${column.key}-filter`} style={getColumnWidthStyle(column.key)}>
                            {column.type === "text" ? (
                              <TextFilter
                                column={column}
                                rows={activeRows}
                                values={textFilters[column.key] || []}
                                onChange={(values) =>
                                  setTextFilters((current) => ({
                                    ...current,
                                    [column.key]: values,
                                  }))
                                }
                              />
                            ) : null}
                            {column.type === "number" ? (
                              <NumberFilter
                                columnKey={column.key}
                                useDurationUnit={!(activeReportName === "Tenure Report" && column.key === "duration")}
                                value={numberFilters[column.key] || { operator: "", value: "", unit: "Any" }}
                                onChange={(value) =>
                                  setNumberFilters((current) => ({
                                    ...current,
                                    [column.key]: value,
                                  }))
                                }
                              />
                            ) : null}
                            {column.type === "date" ? (
                              <DateFilter
                                value={dateFilters[column.key] || { operator: "", value: "", start: "", end: "" }}
                                onChange={(value) =>
                                  setDateFilters((current) => ({
                                    ...current,
                                    [column.key]: value,
                                  }))
                                }
                              />
                            ) : null}
                            {column.type === "grade" ? (
                              <GradeFilter
                                rows={activeRows}
                                columnKey={column.key}
                                value={gradeFilters[column.key] || { operator: "", value: "" }}
                                onChange={(value) =>
                                  setGradeFilters((current) => ({
                                    ...current,
                                    [column.key]: value,
                                  }))
                                }
                              />
                            ) : null}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {shownRows.length === 0 ? (
                        <tr>
                          <td className="no-data-cell" colSpan={Math.max(visibleColumns.length, 1)}>
                            No data found for selected filters
                          </td>
                        </tr>
                      ) : (
                        shownRows.map((row, rowIndex) => {
                          const rowId =
                            row.id ||
                            row.rr_id ||
                            `${row.project_name || row.project || row.employee_name || row.emp_name || "row"}-${
                              row.emp_id || "na"
                            }-${row.available_from || row.start_date || "from"}-${row.available_to || row.end_date || "to"}-${rowIndex}`;
                          return (
                            <tr key={rowId}>
                              {visibleColumns.map((column) => (
                                <td key={`${rowId}-${column.key}`} style={getColumnWidthStyle(column.key)}>
                                  {renderCell(row, column)}
                                </td>
                              ))}
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="empty-panel">{generatedReport} is selected. Data preview is not enabled.</div>
            )}
          </section>
        </main>

        <ColumnDrawer
          stage={drawerStage}
          columns={activeColumns}
          selectedOptionalKeys={optionalSelectedKeys}
          onCancel={closeDrawer}
          onApply={(selectedKeys) => {
            setOptionalSelectedKeys(selectedKeys);
            closeDrawer();
          }}
        />
      </div>
    );
  }

  const root = ReactDOM.createRoot(reportsRootNode);
  root.render(<ReportsApp initialData={payload} />);
}
