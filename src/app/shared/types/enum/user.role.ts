export enum UserRole {
  /// <summary>
  /// Сотрудник
  /// </summary>
  Staff = 1,

  /// <summary>
  /// Администратор
  /// </summary>
  Administrator = 2,

  /// <summary>
  /// Начальник
  /// </summary>
  Manager = 4,

  /// <summary>
  /// Пользователь системы
  /// </summary>
  User = 8,

  /// <summary>
  /// Наблюдатель
  /// </summary>
  Observer = 16,

  /// <summary>
  /// Аудитор
  /// </summary>
  Auditor = 32,

  /// <summary>
  /// Кладовщик
  /// </summary>
  StoreKeeper = 64,
}
