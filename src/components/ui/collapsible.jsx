import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "../../lib/utils"

const Collapsible = React.forwardRef(({ 
  className, 
  children, 
  defaultOpen = false,
  title,
  icon: Icon,
  ...props 
}, ref) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-0 bg-transparent border-0 cursor-pointer hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
        aria-controls="collapsible-content"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-blue-600" />}
          <span className="text-xl font-semibold">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-slate-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="collapsible-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

Collapsible.displayName = "Collapsible"

export { Collapsible }
