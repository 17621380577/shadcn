import {
  Home as HomeIcon,
  Search as SearchIcon,
  User as UserIcon,
  Settings as SettingsIcon,
  Bell as BellIcon,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  FileText as FileTextIcon,
  FilePlus as FilePlusIcon,
  Trash2 as TrashIcon,
  Edit as EditIcon,
  Copy as CopyIcon,
  Share2,
  Download as DownloadIcon,
  Upload as UploadIcon,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  X,
  Check,
  AlertCircle,
  Info,
  Star,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Bookmark,
  Tag,
  Filter,
  Layers,
  BarChart2,
  PieChart,
  Activity,
  Code,
  Terminal,
  Globe,
  MapPin,
  Phone,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Zap,
  Flame,
  Droplets,
  Leaf,
  TreePine,
  Mountain,
  Compass,
  Camera,
  Video,
  Music,
  Headphones,
  Book,
  BookOpen,
  GraduationCap,
  Briefcase,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Bitcoin,
  Gift,
  Award,
  Trophy,
  Medal,
  Sparkles,
  Sparkle,
  ZapOff,
  AlertTriangle,
  AlertOctagon,
  CheckCircle,
  XCircle,
  HelpCircle,
  RefreshCw,
  RotateCw,
  RotateCcw,
  Loader,
  Plus,
  Minus,
  X as Close,
  ArrowRight,
  ArrowLeft as ArrowLeftIcon,
  ArrowUp,
  ArrowDown,
  ArrowUpRight,
  ArrowUpLeft,
  ArrowDownRight,
  ArrowDownLeft,
  Maximize,
  Minimize,
  Minimize2,
  Maximize2,
  Move,
  ZoomIn,
  ZoomOut,
  Share,
  Save,
  Printer,
} from 'lucide-react';

export default function IconsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">图标组件</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">导航图标</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <SearchIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Search</span>
          </div>
          <div className="flex flex-col items-center">
            <UserIcon className="h-6 w-6" />
            <span className="text-xs mt-1">User</span>
          </div>
          <div className="flex flex-col items-center">
            <SettingsIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Settings</span>
          </div>
          <div className="flex flex-col items-center">
            <BellIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Bell</span>
          </div>
          <div className="flex flex-col items-center">
            <MailIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Mail</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">文件图标</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <FileTextIcon className="h-6 w-6" />
            <span className="text-xs mt-1">FileText</span>
          </div>
          <div className="flex flex-col items-center">
            <FilePlusIcon className="h-6 w-6" />
            <span className="text-xs mt-1">FilePlus</span>
          </div>
          <div className="flex flex-col items-center">
            <TrashIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Trash2</span>
          </div>
          <div className="flex flex-col items-center">
            <EditIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Edit</span>
          </div>
          <div className="flex flex-col items-center">
            <CopyIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Copy</span>
          </div>
          <div className="flex flex-col items-center">
            <Share2 className="h-6 w-6" />
            <span className="text-xs mt-1">Share2</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">动作图标</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <DownloadIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Download</span>
          </div>
          <div className="flex flex-col items-center">
            <UploadIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Upload</span>
          </div>
          <div className="flex flex-col items-center">
            <Plus className="h-6 w-6" />
            <span className="text-xs mt-1">Plus</span>
          </div>
          <div className="flex flex-col items-center">
            <Minus className="h-6 w-6" />
            <span className="text-xs mt-1">Minus</span>
          </div>
          <div className="flex flex-col items-center">
            <Check className="h-6 w-6" />
            <span className="text-xs mt-1">Check</span>
          </div>
          <div className="flex flex-col items-center">
            <X className="h-6 w-6" />
            <span className="text-xs mt-1">X</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">状态图标</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <AlertCircle className="h-6 w-6" />
            <span className="text-xs mt-1">AlertCircle</span>
          </div>
          <div className="flex flex-col items-center">
            <AlertTriangle className="h-6 w-6" />
            <span className="text-xs mt-1">AlertTriangle</span>
          </div>
          <div className="flex flex-col items-center">
            <AlertOctagon className="h-6 w-6" />
            <span className="text-xs mt-1">AlertOctagon</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6" />
            <span className="text-xs mt-1">CheckCircle</span>
          </div>
          <div className="flex flex-col items-center">
            <XCircle className="h-6 w-6" />
            <span className="text-xs mt-1">XCircle</span>
          </div>
          <div className="flex flex-col items-center">
            <Info className="h-6 w-6" />
            <span className="text-xs mt-1">Info</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">箭头图标</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <ArrowRight className="h-6 w-6" />
            <span className="text-xs mt-1">ArrowRight</span>
          </div>
          <div className="flex flex-col items-center">
            <ArrowLeftIcon className="h-6 w-6" />
            <span className="text-xs mt-1">ArrowLeft</span>
          </div>
          <div className="flex flex-col items-center">
            <ArrowUp className="h-6 w-6" />
            <span className="text-xs mt-1">ArrowUp</span>
          </div>
          <div className="flex flex-col items-center">
            <ArrowDown className="h-6 w-6" />
            <span className="text-xs mt-1">ArrowDown</span>
          </div>
          <div className="flex flex-col items-center">
            <ChevronRight className="h-6 w-6" />
            <span className="text-xs mt-1">ChevronRight</span>
          </div>
          <div className="flex flex-col items-center">
            <ChevronLeft className="h-6 w-6" />
            <span className="text-xs mt-1">ChevronLeft</span>
          </div>
        </div>
      </div>
    </div>
  );
}