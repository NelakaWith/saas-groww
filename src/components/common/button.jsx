function Button({
  text = "Button",
  type = "primary",
  icon = null,
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses = "inline-flex items-center gap-2 rounded-full";

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return (
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="w-6 h-6 inline-block"
        />
      );
    }
    return (
      <span
        className={`w-8 h-8 flex items-center justify-center ${iconColorClass}`}
      >
        {icon}
      </span>
    );
  };

  const sizeClasses = {
    sm: "px-3 py-2",
    md: "px-4 py-2",
    lg: "px-6 py-4",
  };

  const typeClasses = {
    primary:
      "bg-brand-300 text-white hover:bg-brand-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",
    secondary:
      "bg-white text-brand-300 hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-300",
    outline:
      "bg-transparent border border-neutral-500 text-neutral-500 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500",
  };

  const iconColor = {
    primary: "text-white",
    secondary: "text-brand-300",
    outline: "text-neutral-500",
  };

  const iconColorClass = iconColor[type] || "text-white";

  return (
    <button
      type={type}
      className={`${baseClasses} ${className} ${sizeClasses[size]} ${typeClasses[type]}`}
      {...props}
    >
      <span>{text}</span>
      {renderIcon()}
    </button>
  );
}

export default Button;
