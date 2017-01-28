var routes = [{"name":"","url":"^","views":null,"abstract":true},{"url":"/login","views":{"modalView":{"templateUrl":"src/backend/login/login.html","controller":"loginCtrl as loginVm"}},"data":{"access":"public","authorizedRoles":["guest","editor"],
"authenticated":false,"name":"bo_signin"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"login"},{"url":"/adminCategory/insert","views":{"mainView":{"templateUrl":"src/backend/settings/adminCategory/adminCategory.html","controller":"adminCategoryCtrl"}},"data":{"access":"private","name":"bo_admin_category_insert","area":"setting","subArea":"/adminCategory/insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"adminCategoryInsert"},{"url":"/adminCategory/update/{id:[0-9]{1,8}}","views":{"mainView":{"templateUrl":"src/backend/settings/adminCategory/adminCategory.html","controller":"adminCategoryCtrl"}},"data":{"access":"private","name":"bo_admin_category_update","area":"setting","subArea":"/adminCategory/update"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"adminCategoryUpdate"},{"url":"/adminCategory/list","views":{"mainView":{"templateUrl":"src/backend/settings/adminCategory/adminCategoryList.html","controller":"adminCategoryListCtrl"}},"data":{"access":"private","name":"bo_admin_category_list","area":"setting","subArea":"/adminCategory/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"adminCategoryList"},{"url":"/userGroup","views":{"mainView":{"templateUrl":"src/backend/settings/userProfiling/userGroup/gestioneGruppi.html","controller":"formGroupCtrl"}},"data":{"access":"private","name":"bo_user_group_insert","area":"setting","subArea":"/userGroup"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userGroup"},{"url":"/skin/list","views":{"subView":{"controller":"skinListCtrl","templateUrl":"src/backend/settings/skinManagement/search/skinList.html"}},"data":{"access":"private","area":"setting","subArea":"/skin/list","name":"bo_website_list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.list"},{"url":"/skin/insert","views":{"subView":{"controller":"skinProfileCtrl","templateUrl":"src/backend/settings/skinManagement/profile/profile.html"}},"data":{"access":"private","area":"setting","subArea":"/skin/insert","name":"bo_website_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.insert"},{"url":"/skin/update/{id:[0-9]{1,8}}","abstract":true,"views":{"subView":{"templateUrl":"src/backend/settings/skinManagement/template/templateSubSecond.html"}},"name":"skin.update","data":{}},{"url":"/profile","views":{"subViewSecond":{"controller":"skinProfileCtrl","templateUrl":"src/backend/settings/skinManagement/profile/profile.html"}},"data":{"access":"private","area":"setting","name":"bo_website_update","subArea":"/skin/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.update.profile"},{"url":"/historyLogin","views":{"subViewSecond":{"controller":"historyLoginCtrl","templateUrl":"src/backend/settings/skinManagement/historyLogin/historyLogin.html"}},"data":{"access":"private","area":"setting","name":"bo_admin_access","subArea":"/skin/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.update.historyLogin"},{"url":"/mail","views":{"subViewSecond":{"controller":"mailSettingCtrl","templateUrl":"src/backend/settings/mail/setting/mailSetting.html"}},"data":{"access":"private","area":"setting","name":"bo_website_setting_email","subArea":"/skin/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.update.mail"},{"url":"/mail/template","views":{"subViewSecond":{"controller":"mailTemplateCtrl","templateUrl":"src/backend/settings/mail/template/mailTemplate.html"}},"data":{"access":"private","area":"setting","name":"bo_mail_template"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.update.mailTemplate"},{"url":"/limit","views":{"subViewSecond":{"controller":"skinLimitCtrl","templateUrl":"src/backend/settings/skinManagement/limit/skinLimit.html"}},"data":{"access":"private","area":"setting","name":"bo_website_limit_insert","subArea":"/skin/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.update.limit"},{"url":"/reportProduct","views":{"subViewSecond":{"controller":"skinReportProductCtrl","templateUrl":"src/backend/settings/skinManagement/report/product/skinReportProduct.html"}},"data":{"access":"private","area":"setting","name":"bo_website_report_list","subArea":"/skin/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.update.reportProduct"},{"url":"/reportFinancial","views":{"subViewSecond":{"controller":"skinReportFinancialCtrl","templateUrl":"src/backend/settings/skinManagement/report/financial/skinReportFinancial.html"}},"data":{"access":"private","area":"setting","name":"bo_website_financial_report_list","subArea":"/skin/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"skin.update.reportFinancial"},{"url":"/userRule","views":{"mainView":{"controller":"userRuleCtrl","templateUrl":"src/backend/settings/userProfiling/userRule/userRule.html"}},"data":{"access":"private","name":"bo_user_rule_insert","area":"setting"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userRule"},{"url":"/userRule/{id:[0-9]{1,8}}","views":{"mainView":{"controller":"userRuleCtrl","templateUrl":"src/backend/settings/userProfiling/userRule/userRule.html"}},"data":{"access":"private","name":"bo_user_rule_update","area":"setting"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userRuleUpdate"},{"url":"/userRule/list","views":{"mainView":{"controller":"userRuleListCtrl","templateUrl":"src/backend/settings/userProfiling/userRule/userRuleList.html"}},"data":{"access":"private","name":"bo_user_rule_list","area":"setting"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userRuleList"},{"url":"/userAdmin/list","views":{"subView":{"templateUrl":"src/backend/settings/userAdmin/search/userAdminList.html","controller":"userAdminListCtrl"}},"data":{"access":"private","name":"bo_user_admin_list","area":"setting","subArea":"/userAdmin/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userAdmin.list"},{"url":"/userAdmin/insert","views":{"subView":{"controller":"userAdminProfileCtrl","templateUrl":"src/backend/settings/userAdmin/profile/profile.html"}},"data":{"access":"private","area":"setting","subArea":"/userAdmin/insert","name":"bo_user_admin_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userAdmin.insert"},{"abstract":true,"url":"/userAdmin/update/{id:[0-9]{1,8}}","views":{"subView":{"templateUrl":"src/backend/settings/userAdmin/template/templateSubSecond.html"}},"name":"userAdmin.update","data":{}},{"url":"/profile","views":{"subViewSecond":{"controller":"userAdminProfileCtrl","templateUrl":"src/backend/settings/userAdmin/profile/profile.html"}},"data":{"access":"private","area":"setting","name":"bo_user_admin_update"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userAdmin.update.profile"},{"url":"/security","views":{"subViewSecond":{"controller":"userSecurityCtrl","templateUrl":"src/backend/settings/userAdmin/security/userAdminSecurity.html"}},"data":{"access":"private","name":"bo_update_password_admin","area":"setting"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userAdmin.update.security"},{"url":"/access","views":{"subViewSecond":{"controller":"historyLoginCtrl","templateUrl":"src/backend/settings/userAdmin/historyLogin/historyLogin.html"}},"data":{"access":"private","name":"bo_admin_access","area":"setting"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userAdmin.update.access"},{"url":"/category","views":{"subViewSecond":{"controller":"userAdminSettingCategoryCtrl","templateUrl":"src/backend/settings/userAdmin/settingCategory/userAdminSettingCategory.html"}},"data":{"access":"private","area":"setting","name":"bo_update_admin_category"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userAdmin.update.category"},{"url":"/product/list","views":{"mainView":{"controller":"productListCtrl","templateUrl":"src/backend/settings/productsManagement/list/productList.html"}},"data":{"access":"private","area":"setting","name":"bo_product_list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"productList"},{"url":"/productType/limit/{id:[0-9]{1,8}}","views":{"mainView":{"controller":"productTypeLimitCtrl","templateUrl":"src/backend/settings/productsManagement/limit/productTypeLimit.html"}},"data":{"access":"private","area":"setting","name":"bo_product_type_limit_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"productTypeLimit"},{"url":"/product/limit/{id:[0-9]{1,8}}","views":{"mainView":{"controller":"productLimitCtrl","templateUrl":"src/backend/settings/productsManagement/limit/productLimit.html"}},"data":{"access":"private","area":"setting","name":"bo_product_limit_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"productLimit"},{"url":"/currency/setting","views":{"mainView":{"controller":"currencySettingCtrl","templateUrl":"src/backend/settings/currency/currencySetting.html"}},"data":{"access":"private","area":"setting","name":"bo_setting_currency"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"currencySetting"},{"url":"/language/setting","views":{"mainView":{"controller":"languageSettingCtrl","templateUrl":"src/backend/settings/language/languageSetting.html"}},"data":{"access":"private","area":"setting","name":"bo_language_setting"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"languageSetting"},{"url":"/language/string","views":{"mainView":{"controller":"languageStringCtrl","templateUrl":"src/backend/settings/language/languageString.html"}},"data":{"access":"private","area":"setting","name":"bo_manage_string"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"languageString"},{"url":"/mail/setting","views":{"mainView":{"controller":"mailSettingCtrl","templateUrl":"src/backend/settings/mail/setting/mailSetting.html"}},"data":{"access":"private","area":"setting","name":"bo_website_setting_email"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"mailSetting"},{"url":"/mail/template","views":{"mainView":{"controller":"mailTemplateCtrl","templateUrl":"src/backend/settings/mail/template/mailTemplate.html"}},"data":{"access":"private","area":"setting","name":"bo_mail_template"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"mailTemplate"},{"url":"/documentType","views":{"mainView":{"controller":"documentTypeCtrl","templateUrl":"src/backend/settings/userVerify/documentType/documentType.html"}},"data":{"access":"private","area":"setting","name":"bo_document_type_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"documentType"},{"url":"/verify/setting","views":{"mainView":{"controller":"verifySettingCtrl","templateUrl":"src/backend/settings/userVerify/verifySetting/verifySetting.html"}},"data":{"access":"private","area":"setting","name":"bo_user_verify_setting"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"verifySetting"},{"url":"/gateway/list","views":{"mainView":{"controller":"gatewayListCtrl","templateUrl":"src/backend/settings/gateway/gatewayList.html"}},"data":{"access":"private","area":"setting","name":"bo_gateway_status"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"gatewayList"},{"url":"/gateway/limit/list","views":{"mainView":{"controller":"gatewayLimitListCtrl","templateUrl":"src/backend/settings/gateway/gatewayLimitList.html"}},"data":{"access":"private","area":"setting","name":"bo_limit_gateway"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"gatewayLimitList"},{"url":"/gateway/limit/setting/insert/{gateway_id:[0-9]{1,8}}","views":{"mainView":{"controller":"gatewayLimitCtrl","templateUrl":"src/backend/settings/gateway/gatewayLimit.html"}},"data":{"access":"private","area":"setting","name":"bo_limit_gateway_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"gatewayLimitSettingInsert"},{"url":"/gateway/limit/setting/update/{id:[0-9]{1,8}}/{gateway_id:[0-9]{1,8}}","views":{"mainView":{"controller":"gatewayLimitCtrl","templateUrl":"src/backend/settings/gateway/gatewayLimit.html"}},"data":{"access":"private","area":"setting","name":"bo_limit_gateway_update"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"gatewayLimitSettingUpdate"},{"url":"/userPlayer/list","views":{"mainView":{"controller":"userSrcCtrl","templateUrl":"src/backend/userManagement/userSearch/userSearch.html"}},"data":{"access":"private","name":"bo_user_player_list","area":"user","subArea":"/userPlayer/list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayerList"},{"url":"/logAams","views":{"mainView":{"controller":"logAamsCtrl","templateUrl":"src/backend/userManagement/logAams/logAams.html"}},"data":{"access":"private","name":"bo_temp_aams","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayerLogAams"},{"url":"/userPlayer/{id:[0-9]{1,8}}","views":{"mainView":{"templateUrl":"src/backend/userManagement/userTemplate/userTemplate.html","controller":"userInfoCtrl"}},"data":{"access":"private","name":"bo_user_player_info","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer"},{"url":"/update","views":{"userEditView":{"controller":"userProfileCtrl","templateUrl":"src/backend/userManagement/profile/userProfile.html"}},"data":{"access":"private","name":"bo_user_player_update","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.update"},{"url":"/security","views":{"userEditView":{"controller":"userSecurityCtrl","templateUrl":"src/backend/userManagement/userSecurity/userSecurity.html"}},"data":{"access":"private","name":"bo_update_password_player","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.security"},{"url":"/permission","views":{"userEditView":{"controller":"userPermitsCtrl","templateUrl":"src/backend/userManagement/userPermits/userPermits.html"}},"data":{"access":"private","name":"bo_user_player_permission","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.permission"},{"url":"/movements","views":{"userEditView":{"controller":"movementsListCtrl","templateUrl":"src/backend/userManagement/movements/userMovements.html"}},"data":{"name":"bo_transaction_list","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.movements"},{"url":"/limits","views":{"userEditView":{"controller":"userLimitsCtrl","templateUrl":"src/backend/userManagement/userLimits/userLimits.html"}},"data":{"access":"private","name":"bo_user_player_limit_insert","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.limits"},{"url":"/bonus","views":{"userEditView":{"controller":"userBonusCtrl","templateUrl":"src/backend/userManagement/userBonus/userBonus.html"}},"data":{"access":"private","name":"bo_user_bonus_detail","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.bonus"},{"url":"/thirdPart","views":{"userEditView":{"controller":"userThirdPartCtrl","templateUrl":"src/backend/userManagement/userThirdPart/userThirdPart.html"}},"data":{"access":"private","name":"bo_user_info_third_part","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.thirdPart"},{"url":"/document","views":{"userEditView":{"controller":"userDocumentCtrl","templateUrl":"src/backend/userManagement/userDocument/userDocument.html"}},"data":{"access":"private","name":"bo_user_document_list","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.document"},{"url":"/historyAccess","views":{"userEditView":{"controller":"userHistoryAccessCtrl","templateUrl":"src/backend/userManagement/userHistoryAccess/userHistoryAccess.html"}},"data":{"access":"private","name":"bo_user_access","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.historyAccess"},{"url":"/operationList","views":{"userEditView":{"controller":"userOperationListCtrl","templateUrl":"src/backend/userManagement/operationList/userOperationList.html"}},"data":{"access":"private","name":"bo_user_operation_list","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.operationList"},{"abstract":true,"url":"/operation","views":{"userEditView":{"controller":"userPlayerOperationTemplateCtrl","templateUrl":"src/backend/userManagement/operation/template/userPlayerOperationTemplate.html"}},"data":{"access":"private","area":"user"},"name":"userPlayer.operation"},{"url":"/deposit","views":{"viewOperationArea":{"controller":"userPlayerDepositAccountCtrl","templateUrl":"src/backend/userManagement/operation/depositAccount/userPlayerDepositAccount.html"}},"data":{"access":"private","name":"bo_op_deposit_user_player","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.operation.deposit"},{"url":"/withdraw","views":{"viewOperationArea":{"controller":"userPlayerWithdrawAccountCtrl","templateUrl":"src/backend/userManagement/operation/withdrawAccount/userPlayerWithdrawAccount.html"}},"data":{"access":"private","name":"bo_op_withdraw_user_player","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.operation.withdraw"},{"url":"/bonus","views":{"viewOperationArea":{"controller":"userPlayerBonusAccountCtrl","templateUrl":"src/backend/userManagement/operation/bonusAccount/userPlayerBonusAccount.html"}},"data":{"access":"private","name":"bo_user_bonus_assign","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.operation.bonus"},{"url":"/adjustment","views":{"viewOperationArea":{"controller":"userPlayerAdjustmentAccountCtrl","templateUrl":"src/backend/userManagement/operation/adjustmentAccount/userPlayerAdjustmentAccount.html"}},"data":{"access":"private","name":"bo_op_rectify_user_player","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.operation.adjustment"},{"url":"/historyStatusList","views":{"userEditView":{"controller":"userHistoryStatusListCtrl","templateUrl":"src/backend/userManagement/userHistoryStatus/userHistoryStatusList.html"}},"data":{"access":"private","name":"bo_aams_user_status_history","area":"report"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userPlayer.historyStatus"},{"url":"/document/list","views":{"mainView":{"controller":"docsSearchCtrl","templateUrl":"src/backend/userManagement/docsManagement/docsSearch/docsSearch.html"}},"data":{"access":"private","name":"bo_user_document_list","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"docsSearch"},{"url":"/document/detail/{id:[0-9]{1,8}}/{doc_id:[0-9]{1,8}}","views":{"mainView":{"controller":"documentDetailCtrl","templateUrl":"src/backend/userManagement/docsManagement/documentDetail/documentDetail.html"}},"data":{"access":"private","name":"bo_user_document","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"docDetail"},{"url":"/message/push","views":{"mainView":{"controller":"messagePushCtrl","templateUrl":"src/backend/tool/messagePush.html"}},"data":{"access":"private","name":"bo_message_push","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"pushMessage"},{"url":"/commission/insert","views":{"mainView":{"templateUrl":"src/backend/smartShop/commissionProfile/commissionProfile.html","controller":"commissionProfileCtrl"}},"data":{"access":"private","name":"bo_commission_insert","area":"report","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"commissionInsert"},{"url":"/commission/update/:id","views":{"mainView":{"controller":"commissionProfileCtrl","templateUrl":"src/backend/smartShop/commissionProfile/commissionProfile.html"}},"data":{"access":"private","name":"bo_commission_update","area":"report","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"commissionUpdate"},{"url":"/report/commission","views":{"mainView":{"controller":"commissionReportCtrl","templateUrl":"src/backend/smartShop/report/commissionReport.html"}},"data":{"access":"private","name":"bo_commission_report_list","area":"report","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"commissionReport"},{"url":"/commission/list","views":{"mainView":{"templateUrl":"src/backend/smartShop/commissionProfile/commissionProfileList.html","controller":"commissionProfileListCtrl"}},"data":{"access":"private","name":"bo_commission_list","area":"report","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"commissionProfileList"},{"url":"/productGroup","views":{"mainView":{"templateUrl":"src/backend/smartShop/productGroup/productGroup.html","controller":"productGroupCtrl"}},"data":{"access":"private","name":"bo_product_group_insert","area":"report","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"productGroup"},{"url":"/promoter/list","views":{"subView":{"controller":"promoterListCtrl","templateUrl":"src/backend/smartShop/promoter/search/promoterList.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_promoter_list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.list"},{"url":"/promoter/insert","views":{"subView":{"controller":"promoterSaveCtrl","templateUrl":"src/backend/smartShop/promoter/save/promoterSave.html"}},"data":{"access":"private","area":"smartshop","name":"bo_user_promoter_insert","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.insert"},{"url":"/promoter/agent","views":{"subView":{"templateUrl":"src/backend/smartShop/promoter/user/template/templateSubSecond.html"}},"name":"promoter.userAgent","data":{}},{"abstract":true,"url":"/profile/{id:[0-9]{1,8}}","views":{"subViewSecond":{"controller":"userPromoterMainShared","templateUrl":"src/backend/smartShop/promoter/user/template/templateSubThird.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"typeUser":"agent"},"name":"promoter.userAgent.profile"},{"url":"/update","views":{"subViewThird":{"controller":"userProfileCtrl","templateUrl":"src/backend/smartShop/promoter/user/profile/profile.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_agent_update"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.update"},{"abstract":true,"url":"/commission","views":{"subViewThird":{"controller":"userPromoterCommissionTemplateCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/template/userPromoterCommissionTemplate.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"typeUser":"agent"},"name":"promoter.userAgent.profile.commission"},{"url":"/report","views":{"subViewPromoterCommission":{"controller":"userPromoterCommissionReportCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/userPromoterCommissionReport.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_agent_commission_report","typeUser":"agent"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.commission.report"},{"url":"/associate","views":{"subViewPromoterCommission":{"controller":"userPromoterCommissionCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/userPromoterCommission.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_agent_commission_assoc","typeUser":"agent"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.commission.associate"},{"url":"/commission_detail/{id:[0-9]{1,8}}/{user_id:[0-9]{1,8}}/{commission_report_id:[0-9]{1,8}}","views":{"subViewThird":{"controller":"userPromoterCommissionReportDetailCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/userPromoterCommissionReportDetail.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_commission_report_detail"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.commission_detail"},{"url":"/bill","views":{"subViewThird":{"controller":"manageBillCtrl","templateUrl":"src/backend/smartShop/promoter/user/bill/userPromoterBill.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_manage_bill"},"name":"promoter.userAgent.profile.bill"},{"url":"/security","views":{"subViewThird":{"controller":"userPromoterSecurityCtrl","templateUrl":"src/backend/smartShop/promoter/user/security/userPromoterSecurity.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_update_password"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.security"},{"url":"/permission","views":{"subViewThird":{"controller":"userPromoterPermissionsCtrl","templateUrl":"src/backend/smartShop/promoter/user/permission/userPromoterPermissions.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_agent_permission"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.permissions"},{"url":"/limit","views":{"subViewThird":{"controller":"userPromoterLimitCtrl","templateUrl":"src/backend/smartShop/promoter/user/limit/userPromoterLimit.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_agent_limit_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.limit"},{"url":"/movements","views":{"subViewThird":{"controller":"movementsListCtrl","templateUrl":"src/backend/smartShop/promoter/user/movements/userPromoterMovements.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_transaction_list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.movements"},{"abstract":true,"url":"/operation","views":{"subViewThird":{"controller":"userPromoterOperationTemplateCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/template/userPromoterOperationTemplate.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"type":3},"name":"promoter.userAgent.profile.operation"},{"url":"/deposit","views":{"viewOperationArea":{"controller":"userPromoterDepositAccountCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/depositAccount/userPromoterDepositAccount.html"}},"data":{"access":"private","name":"bo_op_deposit_agent","area":"smartshop","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.operation.deposit"},{"url":"/withdraw","views":{"viewOperationArea":{"controller":"userPromoterWithdrawAccountCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/withdrawAccount/userPromoterWithdrawAccount.html"}},"data":{"access":"private","name":"bo_op_withdraw_agent","area":"smartshop","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.operation.withdraw"},{"url":"/adjustment","views":{"viewOperationArea":{"controller":"userPromoterAdjustmentAccountCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/adjustmentAccount/userPromoterAdjustmentAccount.html"}},"data":{"access":"private","name":"bo_op_rectify_agent","area":"smartshop","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.operation.adjustment"},{"url":"/userAgent/invoiceStatus","views":{"subView":{"controller":"invoiceStatusCtrl","templateUrl":"src/backend/smartShop/promoter/user/invoiceStatus/invoiceStatus.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.invoiceStatus"},{"url":"/promoter/affiliate","views":{"subView":{"templateUrl":"src/backend/smartShop/promoter/user/template/templateSubSecond.html"}},"name":"promoter.userAffiliate","data":{}},{"abstract":true,"url":"/profile/{id:[0-9]{1,8}}","views":{"subViewSecond":{"controller":"userPromoterMainShared","templateUrl":"src/backend/smartShop/promoter/user/template/templateSubThird.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"typeUser":"affiliate"},"name":"promoter.userAffiliate.profile"},{"url":"/update","views":{"subViewThird":{"controller":"userPromoterProfileCtrl","templateUrl":"src/backend/smartShop/promoter/user/profile/profile.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_affiliate_update"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.update"},{"url":"/dashboard","views":{"subViewThird":{"controller":"userPromoterDashboardCtrl","templateUrl":"src/backend/smartShop/promoter/user/dashboard/userPromoterDashboard.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_promoter_dashboard"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.dashboard"},{"url":"/dashboard","views":{"subViewThird":{"controller":"userPromoterDashboardCtrl","templateUrl":"src/backend/smartShop/promoter/user/dashboard/userPromoterDashboard.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_promoter_dashboard"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAgent.profile.dashboard"},{"abstract":true,"url":"/commission","views":{"subViewThird":{"controller":"userPromoterCommissionTemplateCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/template/userPromoterCommissionTemplate.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"typeUser":"affiliate"},"name":"promoter.userAffiliate.profile.commission"},{"url":"/report","views":{"subViewPromoterCommission":{"controller":"userPromoterCommissionReportCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/userPromoterCommissionReport.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_agent_commission_report","typeUser":"affiliate"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.commission.report"},{"url":"/associate","views":{"subViewPromoterCommission":{"controller":"userPromoterCommissionCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/userPromoterCommission.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_affiliate_commission_assoc","typeUser":"affiliate"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.commission.associate"},{"url":"/commission_detail/{id:[0-9]{1,8}}/{user_id:[0-9]{1,8}}/{commission_report_id:[0-9]{1,8}}","views":{"subViewThird":{"controller":"userPromoterCommissionReportDetailCtrl","templateUrl":"src/backend/smartShop/promoter/user/commission/userPromoterCommissionReportDetail.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_commission_report_detail"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.commission_detail"},{"url":"/bill","views":{"subViewThird":{"controller":"manageBillCtrl","templateUrl":"src/backend/smartShop/promoter/user/bill/userPromoterBill.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_manage_bill"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.bill"},{"url":"/security","views":{"subViewThird":{"controller":"userPromoterSecurityCtrl","templateUrl":"src/backend/smartShop/promoter/user/security/userPromoterSecurity.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_update_password"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.security"},{"url":"/permission","views":{"subViewThird":{"controller":"userPromoterPermissionsCtrl","templateUrl":"src/backend/smartShop/promoter/user/permission/userPromoterPermissions.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_affiliate_permission"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.permissions"},{"url":"/limit","views":{"subViewThird":{"controller":"userPromoterLimitCtrl","templateUrl":"src/backend/smartShop/promoter/user/limit/userPromoterLimit.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_user_affiliate_limit_insert"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.limit"},{"url":"/movements","views":{"subViewThird":{"controller":"movementsListCtrl","templateUrl":"src/backend/smartShop/promoter/user/movements/userPromoterMovements.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_transaction_list"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.movements"},{"abstract":true,"url":"/operation","views":{"subViewThird":{"controller":"userPromoterOperationTemplateCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/template/userPromoterOperationTemplate.html"}},"data":{"access":"private","area":"user","authorizedRoles":["guest","editor"],"type":2},"name":"promoter.userAffiliate.profile.operation"},{"url":"/deposit","views":{"viewOperationArea":{"controller":"userPromoterDepositAccountCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/depositAccount/userPromoterDepositAccount.html"}},"data":{"access":"private","name":"bo_op_deposit_affiliate","area":"user","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.operation.deposit"},{"url":"/withdraw","views":{"viewOperationArea":{"controller":"userPromoterWithdrawAccountCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/withdrawAccount/userPromoterWithdrawAccount.html"}},"data":{"access":"private","name":"bo_op_withdraw_affiliate","area":"user","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.operation.withdraw"},{"url":"/adjustment","views":{"viewOperationArea":{"controller":"userPromoterAdjustmentAccountCtrl","templateUrl":"src/backend/smartShop/promoter/user/operation/adjustmentAccount/userPromoterAdjustmentAccount.html"}},"data":{"access":"private","name":"bo_op_rectify_affiliate","area":"user","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.profile.operation.adjustment"},{"url":"/invoiceStatus","views":{"subView":{"controller":"invoiceStatusCtrl","templateUrl":"src/backend/smartShop/promoter/user/invoiceStatus/invoiceStatus.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"]},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"promoter.userAffiliate.invoiceStatus"},{"url":"/setting/template/bill","views":{"mainView":{"controller":"templateBillCtrl","templateUrl":"src/backend/smartShop/setting/bill/templateBill.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_bill_template"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"templateBill"},{"url":"/bill/manage","views":{"mainView":{"controller":"manageBillCtrl","templateUrl":"src/backend/smartShop/bill/manageBill.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_manage_bill"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"manageBill"},{"url":"/bill/emit","views":{"mainView":{"controller":"emitBillCtrl","templateUrl":"src/backend/smartShop/bill/emitBill.html"}},"data":{"access":"private","area":"smartshop","authorizedRoles":["guest","editor"],"name":"bo_billing"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"emitBill"},{"url":"/movements/list","views":{"mainView":{"templateUrl":"src/backend/finance/movements/movementsList.html","controller":"movementsListCtrl"}},"data":{"access":"private","name":"bo_transaction_list","area":"finance"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"movementsList"},{"url":"/balance/list","views":{"mainView":{"templateUrl":"src/backend/finance/balance/userBalance.html","controller":"userBalanceCtrl"}},"data":{"access":"private","name":"bo_user_balance","area":"finance"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userBalance"},{"url":"/finance/deposit/list","views":{"mainView":{"templateUrl":"src/backend/finance/payments/depositList.html","controller":"depositListCtrl"}},"data":{"access":"private","name":"bo_deposit_list","area":"finance"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"depositList"},{"url":"/finance/withdrawal/list","views":{"mainView":{"templateUrl":"src/backend/finance/payments/withdrawList.html","controller":"withdrawListCtrl"}},"data":{"access":"private","name":"bo_withdraw_list","area":"finance"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"withdrawList"},{"url":"/report/dashboard","views":{"mainView":{"controller":"reportDashboardCtrl","templateUrl":"src/backend/Reports/dashboard/dashboard.html"}},"name":"reportDashboard"},{"url":"/report/general","views":{"mainView":{"controller":"reportTradingCtrl","templateUrl":"src/backend/Reports/tradingGeneral/reportTrading.html"}},"data":{"access":"private","name":"bo_trading_general_list","area":"report"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"reportTrading"},{"url":"/report/overview","views":{"mainView":{"controller":"tradingReportOverviewCtrl","templateUrl":"src/backend/Reports/tradingReportOverview/tradingReportOverview.html"}},"data":{"access":"private","name":"bo_trading_report","area":"report"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"reportTradingOverview"},{"url":"/report/monthlyBalance","views":{"mainView":{"controller":"balanceReportCtrl","templateUrl":"src/backend/Reports/balanceReport/balanceReport.html"}},"data":{"access":"private","name":"bo_monthly_balance_report","area":"report"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"reportBalance"},{"url":"/report/product/casino/{id:[0-9]{1,8}}","views":{"mainView":{"controller":"tradingProductCtrl","templateUrl":"src/backend/Reports/tradingProduct/tradingProduct.html"}},"data":{"access":"private","name":"bo_report_product_casino","area":"report","product_type":"casino"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"reportProductCasino"},{"url":"/report/product/poker/{id:[0-9]{1,8}}/{game_id:[0-9]{1,8}}","views":{"mainView":{"controller":"tradingProductCtrl","templateUrl":"src/backend/Reports/tradingProduct/tradingProduct.html"}},"data":{"access":"private","name":"bo_report_product_casino","area":"report","product_type":"casino"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"reportProductPoker"},{"url":"/report/bonusStatus","views":{"mainView":{"controller":"bonusStatusCtrl","templateUrl":"src/backend/Reports/bonusStatus/bonusStatus.html"}},"data":{"access":"private","name":"bo_user_bonus_status","area":"report"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"bonusStatus"},{"url":"/report/userTrend","views":{"mainView":{"controller":"userTrendCtrl","templateUrl":"src/backend/Reports/userTrend/userTrend.html"}},"data":{"name":"bo_user_trend","area":"report","access":"private"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userTrend"},{"url":"/report/userTrendPlay","views":{"mainView":{"controller":"userTrendPlayCtrl","templateUrl":"src/backend/Reports/userTrendPlay/userTrendPlay.html"}},"data":{"name":"bo_user_player_keep","area":"report","access":"private"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userTrendPlay"},{"url":"/report/netentReport","views":{"mainView":{"controller":"netentReportCtrl","templateUrl":"src/backend/Reports/netentReport/netentReport.html"}},"data":{"name":"bo_user_casino_bonus","area":"report","access":"private"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"netentReport"},{"url":"/report/product/sport/{id:[0-9]{1,8}}","views":{"mainView":{"controller":"tradingProductCtrl","templateUrl":"src/backend/Reports/tradingProduct/tradingProduct.html"}},"data":{"access":"private","name":"bo_report_product_sport","area":"report","product_type":"sport"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"reportProductSport"},{"url":"/report/financial","views":{"mainView":{"controller":"tradingFinancialCtrl","templateUrl":"src/backend/Reports/tradingFinancial/tradingFinancial.html"}},"data":{"area":"user","access":"private","name":"bo_financial_report"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"reportFinancial"},{"url":"/fee","views":{"mainView":{"controller":"feeCtrl","templateUrl":"src/backend/Reports/fee/fee.html"}},"data":{"access":"private","name":"bo_fee_setting","area":"report"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"fee"},{"url":"/historyStatus","views":{"mainView":{"controller":"userHistoryStatusCtrl","templateUrl":"src/backend/Reports/aams/userHistoryStatus.html"}},"data":{"access":"private","name":"bo_aams_status_history","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userHistoryStatus"},{"url":"/hugeTransaction/list","views":{"mainView":{"controller":"userHugeTransactionListCtrl","templateUrl":"src/backend/Reports/aams/userHugeTransactionList.html"}},"data":{"access":"private","name":"bo_aams_huge_transaction","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userHugeTransactionList"},{"url":"/hugeWin/list","views":{"mainView":{"controller":"userHugeWinListCtrl","templateUrl":"src/backend/Reports/aams/userHugeWinList.html"}},"data":{"access":"private","name":"bo_aams_huge_win","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userHugeWinList"},{"url":"/userStatusList","views":{"mainView":{"controller":"userStatusListCtrl","templateUrl":"src/backend/Reports/aams/userStatusList.html"}},"data":{"access":"private","name":"bo_aams_status_list","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userStatusList"},{"url":"/autoExclusionList","views":{"mainView":{"controller":"autoExclusionListCtrl","templateUrl":"src/backend/Reports/aams/autoExclusionList.html"}},"data":{"access":"private","name":"bo_auto_exclusion_list","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"autoExclusionList"},{"url":"/userOperationList","views":{"mainView":{"controller":"userOperationListCtrl","templateUrl":"src/backend/Reports/aams/userOperationList.html"}},"data":{"access":"private","name":"bo_user_operation_list","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userOperationList"},{"url":"/closeAccountRequest/list","views":{"mainView":{"controller":"userClosingRequestListCtrl","templateUrl":"src/backend/Reports/aams/userClosingRequestList.html"}},"data":{"access":"private","name":"bo_request_account_closing","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userClosingRequestList"},{"url":"/sessionGame/list","views":{"mainView":{"controller":"userSessionGameListCtrl","templateUrl":"src/backend/Reports/aams/userSessionGameList.html"}},"data":{"access":"private","name":"bo_user_session_game","area":"user"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"userSessionGameList"},{"url":"/bonusCampaign/code/list","views":{"mainView":{"templateUrl":"src/backend/bonusCampaign/bonusCodeCampaign/bonusCodeList.html","controller":"bonusCodeListCtrl"}},"data":{"access":"private","name":"bo_user_bonus_code","area":"bonusCampaign"},"resolve":{"page":["pageNavigator","$q","$stateParams",null]},"name":"bonusCodeList"}];

var ROUTES = new Map();

routes.forEach((elem) => {
    let name = elem.url;
    ROUTES.set(name, elem);
})

var sidebarMenuSettings = [{
    titoloIt: "Gestione Skin",
    titoloEn: "Skin Management",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Gestione Amministratori",
    titoloEn: "Admin Management",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-bar-chart"
}, {
    titoloIt: "Gestione Prodotti",
    titoloEn: "Product Management",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Gestione Gateway",
    titoloEn: "Gateway Management",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Profilazione Utenti",
    titoloEn: "User Profiling",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Gestione Ruoli",
    titoloEn: "Roles Management",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Configurazione Internazionali",
    titoloEn: "International Configuration",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
},{
    titoloIt: "Configurazione",
    titoloEn: "Configuration",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
},{
    titoloIt: "Verifica Utenti",
    titoloEn: "User Verify",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}];

var sidebarMenuAccountability = [{
    titoloIt: "Ricerca Movimenti",
    titoloEn: "Movements search",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Lista Depositi",
    titoloEn: "Deposits List",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-bar-chart"
}, {
    titoloIt: "Lista Prelievi",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Impostazioni",
    titoloEn: "Settings",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Report Balance",
    titoloEn: "Report Balance",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}];

var sidebarMenuUsers = [{
    titoloIt: "Ricerca Utenti",
    titoloEn: "Users Research",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Gestione Documenti",
    titoloEn: "Documents Management",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-bar-chart"
}, {
    titoloIt: "Storico Lista Utenti",
    titoloEn: "Users List Logs",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Lista Operazioni Utente",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Lista Utenti Autoesclusivi",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Elenco Giocate",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Chiusura Conto",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Depositi e Prelievi Ingenti",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Vincite Ingenti",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Notifiche Push",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Attivita Utenti",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Bonus Netent",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}];

var sidebarMenuSmartshop = [{
    titoloIt: "Impostazioni",
    titoloEn: "Settings",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Fatturazione",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-bar-chart"
}, {
    titoloIt: "Report",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Promoter",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Profili Commerciali",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Elenco Giocate",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Chiusura Conto",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Depositi e Prelievi Ingenti",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Vincite Ingenti",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Notifiche Push",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Attivita Utenti",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Bonus Netent",
    titoloEn: "",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}];

var sidebarMenuReport = [{
    titoloIt: "User trend",
    titoloEn: "User trend",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Trading Reports",
    titoloEn: "Trading Reports",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-bar-chart"
}, {
    titoloIt: "Product Reports",
    titoloEn: "Product Reports",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Report Finanziari",
    titoloEn: "Report Finanziari",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Impostazioni",
    titoloEn: "Impostazioni",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Report balance",
    titoloEn: "Report balance",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}];

var sidebarMenuTournaments = [{
    titoloIt: "Crea Nuovo Torneo",
    titoloEn: "Create New Tournament",
    urlabs: "",
    urlcontroller: "/",
    icon: ""
}, {
    titoloIt: "Lista Tornei",
    titoloEn: "Tournaments List",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-bar-chart"
}];

var headerbarMenu = [{
    titoloIt: "Impostazioni",
    titoloEn: "Settings",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-cog",
    menu: sidebarMenuSettings
}, {
    titoloIt: "Contabilita",
    titoloEn: "Accountability",
    urlabs: "",
    urlcontroller: "/",
    icon: "fa-bar-chart",
    menu: sidebarMenuAccountability
}, {
    titoloIt: "Gestione Utenti",
    titoloEn: "Users Management",
    urlabs: "",
    urlcontroller: "/",
    icon: "",
    menu: sidebarMenuUsers
}, {
    titoloIt: "Smartshop",
    titoloEn: "Smartshop",
    urlabs: "",
    urlcontroller: "/",
    icon: "",
    menu: sidebarMenuSmartshop
}, {
    titoloIt: "Report e Analisi",
    titoloEn: "Report and Analysis",
    urlabs: "",
    urlcontroller: "/report/general",
    icon: "",
    menu: sidebarMenuReport
}, {
    titoloIt: "Gestione Tornei",
    titoloEn: "Tournaments Management",
    urlabs: "",
    urlcontroller: "/",
    icon: "",
    menu: sidebarMenuTournaments
}];

angular.module("gi.settings", [])
    .config(function($interpolateProvider){
      //$interpolateProvider.startSymbol("{{{").endSymbol('}}}');
    })
    .constant("ROUTES", ROUTES)
    .constant("MENU", headerbarMenu);
